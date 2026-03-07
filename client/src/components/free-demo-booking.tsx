import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, CheckCircle, Phone, Users, Zap, Download, Mail, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Input masking functions
const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters
  const phoneNumber = value.replace(/\D/g, '');
  
  // Apply (XXX) XXX-XXXX formatting
  if (phoneNumber.length <= 3) {
    return phoneNumber;
  } else if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
};

const formatCompanyName = (value: string): string => {
  // Capitalize first letter of each word
  return value.replace(/\b\w/g, l => l.toUpperCase());
};

// Timezone-aware time slot generation
const generateTimeSlots = (selectedDate: string, userTimezone: string) => {
  if (!selectedDate) return [];
  
  const date = new Date(selectedDate);
  const slots = [];
  
  // Business hours: 9 AM to 5 PM in user's timezone
  const businessHours = [
    { start: 9, end: 9.5, label: "9:00 AM - 9:30 AM" },
    { start: 10, end: 10.5, label: "10:00 AM - 10:30 AM" },
    { start: 11, end: 11.5, label: "11:00 AM - 11:30 AM" },
    { start: 14, end: 14.5, label: "2:00 PM - 2:30 PM" },
    { start: 15, end: 15.5, label: "3:00 PM - 3:30 PM" },
    { start: 16, end: 16.5, label: "4:00 PM - 4:30 PM" }
  ];
  
  businessHours.forEach(slot => {
    const slotDate = new Date(date);
    slotDate.setHours(slot.start, 0, 0, 0);
    
    // Check if slot is in the future
    if (slotDate > new Date()) {
      slots.push({
        value: slot.label,
        label: slot.label,
        datetime: slotDate.toISOString(),
        timezone: userTimezone
      });
    }
  });
  
  return slots;
};

// ICS calendar file generation
const generateICSFile = (formData: DemoBookingData, timezone: string) => {
  const { name, email, preferredDate, timeSlot, demoType } = formData;
  const startTime = new Date(`${preferredDate} ${timeSlot.split(' - ')[0]}`);
  const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later
  
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CONSTRUKTR//Demo Booking//EN
BEGIN:VEVENT
UID:demo-${Date.now()}@construktr.com
DTSTART:${formatDate(startTime)}
DTEND:${formatDate(endTime)}
SUMMARY:CONSTRUKTR Demo - ${demoType}
DESCRIPTION:Personal demo of CONSTRUKTR contractor management software.\\n\\nDemo Type: ${demoType}\\n\\nJoin URL: https://meet.construktr.com/demo/${Date.now()}\\n\\nQuestions? Call (555) 123-4567
LOCATION:Online Video Call
ORGANIZER;CN=CONSTRUKTR Team:mailto:demos@construktr.com
ATTENDEE;CN=${name}:mailto:${email}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:CONSTRUKTR Demo in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`;
  
  return icsContent;
};

const demoTypes = [
  { value: "overview", label: "Platform Overview (15 min)", description: "See all features and benefits" },
  { value: "deep-dive", label: "Feature Deep-Dive (30 min)", description: "Focus on specific features for your trade" },
  { value: "setup", label: "Setup & Onboarding (45 min)", description: "Start Free Trial with your account" }
];

interface DemoBookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  tradeType: string;
  demoType: string;
  preferredDate: string;
  timeSlot: string;
  timezone?: string;
}

interface SuccessState {
  isBooked: boolean;
  bookingDetails?: {
    confirmationId: string;
    meetingUrl: string;
    calendarEvent: string;
  };
}

export default function FreeDemoBooking() {
  const [formData, setFormData] = useState<DemoBookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    tradeType: "",
    demoType: "",
    preferredDate: "",
    timeSlot: "",
    timezone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successState, setSuccessState] = useState<SuccessState>({ isBooked: false });
  const [userTimezone, setUserTimezone] = useState<string>("");
  const { toast } = useToast();

  // Detect user timezone on component mount
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
    setFormData(prev => ({ ...prev, timezone }));
  }, []);

  // Generate available time slots based on selected date and timezone
  const availableTimeSlots = useMemo(() => {
    return generateTimeSlots(formData.preferredDate, userTimezone);
  }, [formData.preferredDate, userTimezone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate booking details
      const confirmationId = `DEMO-${Date.now().toString().slice(-6)}`;
      const meetingUrl = `https://meet.construktr.com/demo/${confirmationId}`;
      const calendarEvent = generateICSFile(formData, userTimezone);
      
      setSuccessState({
        isBooked: true,
        bookingDetails: {
          confirmationId,
          meetingUrl,
          calendarEvent
        }
      });
      
      toast({
        title: "Demo Booked Successfully!",
        description: `Confirmation #${confirmationId} - Check your email for meeting details.`,
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again or call us at (555) 123-4567.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof DemoBookingData, value: string) => {
    let formattedValue = value;
    
    // Apply input masking based on field type
    if (field === 'phone') {
      formattedValue = formatPhoneNumber(value);
    } else if (field === 'company') {
      formattedValue = formatCompanyName(value);
    } else if (field === 'name') {
      // Capitalize first letter of each word for names
      formattedValue = value.replace(/\b\w/g, l => l.toUpperCase());
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
  };

  // Download ICS calendar file
  const downloadCalendarFile = () => {
    if (!successState.bookingDetails) return;
    
    const blob = new Blob([successState.bookingDetails.calendarEvent], { 
      type: 'text/calendar;charset=utf-8' 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `construktr-demo-${successState.bookingDetails.confirmationId}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Calendar Download",
      description: "Calendar event downloaded successfully!",
    });
  };

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (successState.isBooked && successState.bookingDetails) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-green-200 bg-[var(--clr-surface)]/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Demo is Scheduled!
                </h3>
                <p className="text-[var(--clr-text-2)] mb-6">
                  We've sent a calendar invite to {formData.email}. Our team will show you exactly how 
                  CONSTRUKTR can transform your {formData.tradeType.toLowerCase()} business.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-blue-900 mb-4">What to Expect in Your Demo:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start">
                      <Video className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <div className="font-semibold text-blue-900">Live Walkthrough</div>
                        <div className="text-blue-700">See the actual app in action</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <div className="font-semibold text-blue-900">Custom Setup</div>
                        <div className="text-blue-700">Tailored to your business needs</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <div className="font-semibold text-blue-900">Q&A Session</div>
                        <div className="text-blue-700">Get all your questions answered</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl mr-4"
                    onClick={() => window.open('https://apps.apple.com/app/construktr', '_blank')}
                  >
                    Download Free App
                  </Button>
                  
                  <div className="text-sm text-[var(--clr-text-2)]">
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Questions? Call us at (555) 123-4567
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <Calendar className="w-4 h-4 mr-2" />
            Free Personal Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Book Your Free Demo
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto leading-relaxed">
            See exactly how CONSTRUKTR works for your specific trade. Our experts will show you 
            features tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-gray-200 shadow-xl bg-[var(--clr-surface)]/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                Schedule Your Personal Demo
              </CardTitle>
              <CardDescription className="text-[var(--clr-text-2)]">
                Choose a time that works for you. Most demos take 15-30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@smithplumbing.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Smith Plumbing Co."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tradeType" className="text-sm font-semibold text-gray-700">
                    Your Trade *
                  </Label>
                  <Select value={formData.tradeType} onValueChange={(value) => handleInputChange('tradeType', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select your trade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="hvac">HVAC</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="roofing">Roofing</SelectItem>
                      <SelectItem value="handyman">Handyman Services</SelectItem>
                      <SelectItem value="landscaping">Landscaping</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="flooring">Flooring</SelectItem>
                      <SelectItem value="general">General Contracting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    Demo Type *
                  </Label>
                  <div className="grid grid-cols-1 gap-3">
                    {demoTypes.map((demo) => (
                      <label key={demo.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="demoType"
                          value={demo.value}
                          checked={formData.demoType === demo.value}
                          onChange={(e) => handleInputChange('demoType', e.target.value)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-white">{demo.label}</div>
                          <div className="text-sm text-[var(--clr-text-2)]">{demo.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-semibold text-gray-700">
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeSlot" className="text-sm font-semibold text-gray-700">
                      Preferred Time *
                    </Label>
                    <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimeSlots.length > 0 ? (
                          availableTimeSlots.map((slot) => (
                            <SelectItem key={slot.value} value={slot.value}>
                              {slot.label} ({userTimezone})
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-slots" disabled>
                            {formData.preferredDate ? "No available slots for this date" : "Please select a date first"}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.tradeType || !formData.demoType || !formData.preferredDate || !formData.timeSlot}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Booking Your Demo...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Book My Free Demo
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll send you a calendar invite and won't share your information with anyone.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}