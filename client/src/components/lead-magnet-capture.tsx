import { motion } from "framer-motion";
import { Download, FileText, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useTrackLeadMagnet } from "./retargeting-pixels";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadMagnetCaptureProps {
  magnet: "ai-toolkit" | "time-saving-checklist";
  trigger?: React.ReactNode;
}

const magnetConfig = {
  "ai-toolkit": {
    title: "Free Contractor's AI Toolkit",
    subtitle: "Complete Guide to AI for Service Businesses",
    description: "Learn how top contractors use AI to save 10+ hours per week",
    features: [
      "AI Quote Templates That Win More Jobs",
      "Smart Scheduling Workflows", 
      "Automated Customer Communication",
      "Revenue Tracking Dashboard Setup",
      "Integration Setup Guides"
    ],
    ctaText: "Download Free Toolkit",
    fileName: "contractors-ai-toolkit.pdf"
  },
  "time-saving-checklist": {
    title: "5 Ways to Save 10 Hours a Week",
    subtitle: "Quick-Win Checklist for Busy Contractors", 
    description: "Proven strategies that busy contractors use to reclaim their time",
    features: [
      "Route Optimization Hacks",
      "Customer Communication Templates",
      "Invoicing Automation Setup",
      "Job Tracking Shortcuts",
      "Mobile Workflow Tips"
    ],
    ctaText: "Get Free Checklist",
    fileName: "time-saving-checklist.pdf"
  }
};

export default function LeadMagnetCapture({ magnet, trigger }: LeadMagnetCaptureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const config = magnetConfig[magnet];
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("/api/lead-magnets", "POST", {
        ...data,
        magnet,
        source: "lead-magnet-popup",
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Check your email for the download link.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/lead-magnets"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const DefaultTrigger = () => (
    <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-electric-blue/20 bg-gradient-to-br from-blue-50 to-white group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors duration-300">
            <FileText className="w-6 h-6 text-electric-blue" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
              {config.title}
            </h3>
            <p className="text-[var(--clr-text-2)] mb-4">
              {config.description}
            </p>
            <div className="flex items-center text-electric-blue font-semibold">
              <Download className="w-4 h-4 mr-2" />
              <span>{config.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <DefaultTrigger />}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            {config.title}
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Preview */}
            <div className="text-center p-4 bg-gradient-to-br from-electric-blue/5 to-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {config.subtitle}
              </h3>
              <p className="text-sm text-[var(--clr-text-2)] mb-4">
                {config.description}
              </p>
              
              <div className="space-y-2">
                {config.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          {...field} 
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Smith Plumbing Co." 
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-electric-blue text-white font-bold text-lg hover:bg-blue-700 transition-all duration-300"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      {config.ctaText}
                    </div>
                  )}
                </Button>
              </form>
            </Form>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Check Your Email!
            </h3>
            <p className="text-[var(--clr-text-2)] mb-4">
              We've sent your {config.title.toLowerCase()} to your email address.
            </p>
            <p className="text-sm text-gray-500">
              Don't see it? Check your spam folder or contact support.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}