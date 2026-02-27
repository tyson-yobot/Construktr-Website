import { CheckCircle, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SectionStatusProps {
  sectionName: string;
  isComplete: boolean;
  specs: string[];
  onHighlight: () => void;
}

export default function SectionStatusIndicator({ 
  sectionName, 
  isComplete, 
  specs, 
  onHighlight 
}: SectionStatusProps) {
  if (!isComplete) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-lg p-4 max-w-sm shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <Badge className="bg-green-600 text-white">{sectionName} Complete</Badge>
      </div>
      
      <div className="space-y-1 mb-3">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-gray-700">{spec}</span>
          </div>
        ))}
      </div>
      
      <Button 
        size="sm" 
        onClick={onHighlight}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        <Eye className="w-4 h-4 mr-2" />
        Show Section
      </Button>
    </div>
  );
}