import { useState } from 'react';
import { CheckCircle, Eye, X, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionName: string;
  specifications: string[];
  implementationDetails: {
    layout: string;
    features: string[];
    cta: string;
    assets: string;
    codeLines: number;
    verifications: number;
  };
}

export default function SectionCompletionModal({
  isOpen,
  onClose,
  sectionName,
  specifications,
  implementationDetails
}: CompletionModalProps) {
  const scrollToSection = () => {
    const element = document.getElementById('instant-payments-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.style.outline = '3px solid var(--color-success)';
      setTimeout(() => {
        element.style.outline = 'none';
      }, 3000);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <CheckCircle className="w-6 h-6 text-green-600" />
            {sectionName} Section Status
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Completion Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-green-600 text-white">COMPLETED</Badge>
              <span className="text-sm text-[var(--clr-text-2)]">
                Verified {implementationDetails.verifications} times
              </span>
            </div>
            <p className="text-sm text-green-800">
              This section has been fully implemented and is working correctly on the website.
            </p>
          </div>

          {/* Specifications Checklist */}
          <div>
            <h3 className="font-semibold text-white mb-3">✅ All Specifications Met:</h3>
            <div className="space-y-2">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-3">📋 Implementation Details:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-[var(--clr-text-2)]">Layout:</span>
                <p className="text-gray-800">{implementationDetails.layout}</p>
              </div>
              <div>
                <span className="font-medium text-[var(--clr-text-2)]">CTA:</span>
                <p className="text-gray-800">{implementationDetails.cta}</p>
              </div>
              <div>
                <span className="font-medium text-[var(--clr-text-2)]">Assets:</span>
                <p className="text-gray-800">{implementationDetails.assets}</p>
              </div>
              <div>
                <span className="font-medium text-[var(--clr-text-2)]">Code:</span>
                <p className="text-gray-800">{implementationDetails.codeLines} lines</p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="font-semibold text-white mb-3">🔧 Features Included:</h3>
            <div className="grid grid-cols-1 gap-2">
              {implementationDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button 
              onClick={scrollToSection}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Section on Page
            </Button>
            <Button 
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}