import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, CheckCircle, Loader2, Download, ExternalLink, User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Form validation schema
const demoFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  trade: z.string().min(1, 'Please select your trade'),
  teamSize: z.string().min(1, 'Please select your team size'),
  selectedSlot: z.string().min(1, 'Please select a demo time slot'),
  timezone: z.string().min(1, 'Timezone is required')
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface TimeSlot {
  id: string;
  date: string;
  time: string;
  utcTime: string;
  available: boolean;
}

const trades = [
  'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Landscaping', 
  'Painting', 'Flooring', 'Solar', 'Concrete', 'Kitchen & Bath',
  'General Contractor', 'Handyman', 'Other'
];

const teamSizes = [
  'Just me (1)', '2-5 people', '6-10 people', '11-25 people', '26-50 people', '50+ people'
];

export default function BookDemoForm() {
  const [currentStep, setCurrentStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userTimezone, setUserTimezone] = useState('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlotDetails, setSelectedSlotDetails] = useState<TimeSlot | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    mode: 'onChange'
  });

  // Get user's timezone
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
    setValue('timezone', timezone);
    generateTimeSlots(timezone);
  }, [setValue]);

  // Generate available time slots for the next 7 business days
  const generateTimeSlots = (timezone: string) => {
    const slots: TimeSlot[] = [];
    const now = new Date();
    let currentDate = new Date(now);
    
    // Generate slots for next 7 business days
    for (let day = 0; day < 10; day++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + day);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      // Generate time slots from 9 AM to 5 PM
      for (let hour = 9; hour < 17; hour += 2) {
        const slotDate = new Date(date);
        slotDate.setHours(hour, 0, 0, 0);
        
        // Skip past times for today
        if (slotDate <= now) continue;
        
        const localTime = slotDate.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone: timezone
        });
        
        const localDate = slotDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: timezone
        });
        
        slots.push({
          id: `${slotDate.getTime()}`,
          date: localDate,
          time: localTime,
          utcTime: slotDate.toISOString(),
          available: Math.random() > 0.3 // Simulate availability
        });
      }
    }
    
    setAvailableSlots(slots.slice(0, 12)); // Show first 12 available slots
  };

  // Phone number input masking
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    setValue('phone', value, { shouldValidate: true });
  };

  // Handle slot selection
  const handleSlotSelect = (slotId: string) => {
    const slot = availableSlots.find(s => s.id === slotId);
    if (slot) {
      setSelectedSlotDetails(slot);
      setValue('selectedSlot', slotId, { shouldValidate: true });
    }
  };

  // Form submission
  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    
    try {
      // Track form submit event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'demo_booking',
          value: 1
        });
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCurrentStep('success');
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate calendar file (.ics)
  const generateCalendarFile = () => {
    if (!selectedSlotDetails) return;
    
    const startDate = new Date(selectedSlotDetails.utcTime);
    const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutes
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CONSTRUKTR//Demo Booking//EN
BEGIN:VEVENT
UID:demo-${selectedSlotDetails.id}@construktr.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:CONSTRUKTR Product Demo
DESCRIPTION:Your personalized demo of CONSTRUKTR contractor management software. We'll show you how to save 8+ hours per week and get paid 3x faster.
LOCATION:Video Call (link will be sent via email)
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:CONSTRUKTR Demo in 15 minutes
TRIGGER:-PT15M
END:VALARM
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'construktr-demo.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (currentStep === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-2xl text-green-800">Demo Booked Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-[var(--clr-surface)] rounded-lg p-6 border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  {selectedSlotDetails?.date} at {selectedSlotDetails?.time}
                </span>
                <Badge variant="secondary" className="ml-2">
                  {userTimezone.split('/').pop()?.replace('_', ' ')} time
                </Badge>
              </div>
              <p className="text-[var(--clr-text-2)] mb-4">
                We'll send you a video call link and demo materials within 1 business day.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={generateCalendarFile}
                className="btn-primary btn-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              <Button
                variant="outline"
                className="btn-lg"
                asChild
              >
                <a href="/get" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Start Free Trial Now
                </a>
              </Button>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-800 font-medium">
                📧 Confirmation email sent • 📞 We'll reply within 1 business day • ⏱️ 30-minute demo
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            Book Your Free Demo
          </CardTitle>
          <p className="text-[var(--clr-text-2)]">
            See how CONSTRUKTR can save you 8+ hours per week. Choose a time that works for you.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Left Column - Personal Info */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      className={errors.firstName ? 'border-red-500' : ''}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      className={errors.lastName ? 'border-red-500' : ''}
                      placeholder="Smith"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                  {watch('email') && !errors.email && (
                    <p className="text-sm text-green-600 mt-1">✓ Valid email format</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    onChange={handlePhoneChange}
                    value={watch('phone') || ''}
                    className={errors.phone ? 'border-red-500' : ''}
                    placeholder="(555) 123-4567"
                    maxLength={14}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                  )}
                  {watch('phone') && !errors.phone && (
                    <p className="text-sm text-green-600 mt-1">✓ Valid phone format</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    className={errors.company ? 'border-red-500' : ''}
                    placeholder="Smith Construction LLC"
                  />
                  {errors.company && (
                    <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="trade">Trade/Industry *</Label>
                    <Select onValueChange={(value) => setValue('trade', value, { shouldValidate: true })}>
                      <SelectTrigger className={errors.trade ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select trade" />
                      </SelectTrigger>
                      <SelectContent>
                        {trades.map((trade) => (
                          <SelectItem key={trade} value={trade}>
                            {trade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.trade && (
                      <p className="text-sm text-red-600 mt-1">{errors.trade.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <Select onValueChange={(value) => setValue('teamSize', value, { shouldValidate: true })}>
                      <SelectTrigger className={errors.teamSize ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.teamSize && (
                      <p className="text-sm text-red-600 mt-1">{errors.teamSize.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Time Slot Picker */}
              <div className="space-y-4">
                <div>
                  <Label className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    Choose Your Demo Time *
                    <Badge variant="secondary" className="ml-2">
                      {userTimezone.split('/').pop()?.replace('_', ' ')} time
                    </Badge>
                  </Label>
                  
                  <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto border rounded-lg p-4">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => slot.available && handleSlotSelect(slot.id)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          watch('selectedSlot') === slot.id
                            ? 'border-electric-blue bg-electric-blue/10 text-electric-blue'
                            : slot.available
                            ? 'border-gray-200 hover:border-electric-blue hover:bg-blue-50'
                            : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{slot.date}</div>
                            <div className="text-sm text-[var(--clr-text-2)]">{slot.time}</div>
                          </div>
                          {slot.available ? (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Available
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-400 border-gray-300">
                              Booked
                            </Badge>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {errors.selectedSlot && (
                    <p className="text-sm text-red-600 mt-2">{errors.selectedSlot.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="btn-primary btn-lg w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Booking Your Demo...
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Demo
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 text-center mt-2">
                No credit card required • Free 30-minute consultation • We reply within 1 business day
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}