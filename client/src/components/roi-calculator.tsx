import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, Clock, TrendingUp, Users, Building } from 'lucide-react';

interface ROIResults {
  timeSaved: number;
  costSavings: number;
  revenueIncrease: number;
  totalROI: number;
  paybackPeriod: number;
  yearlyBenefit: number;
}

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [avgJobValue, setAvgJobValue] = useState<number>(15000);
  const [jobsPerMonth, setJobsPerMonth] = useState<number>(12);
  const [adminHours, setAdminHours] = useState<number>(20);
  const [conversionRate, setConversionRate] = useState<number>(35);
  const [profitMargin, setProfitMargin] = useState<number>(25);
  const [results, setResults] = useState<ROIResults | null>(null);

  const calculateROI = () => {
    // Time savings calculations
    const adminTimeReduction = 0.8; // 80% reduction in admin time
    const timeSavedPerWeek = adminHours * adminTimeReduction;
    const timeSavedPerMonth = timeSavedPerWeek * 4.3;
    const timeSavedPerYear = timeSavedPerMonth * 12;
    
    // Cost savings (assuming $50/hour for admin work)
    const hourlyRate = 50;
    const monthlyCostSavings = timeSavedPerMonth * hourlyRate;
    const yearlyCostSavings = monthlyCostSavings * 12;

    // Revenue increase from better conversion rates
    const currentMonthlyRevenue = jobsPerMonth * avgJobValue * (conversionRate / 100);
    const improvedConversionRate = Math.min(conversionRate + 15, 85); // Up to 15% improvement
    const improvedMonthlyRevenue = jobsPerMonth * avgJobValue * (improvedConversionRate / 100);
    const monthlyRevenueIncrease = improvedMonthlyRevenue - currentMonthlyRevenue;
    const yearlyRevenueIncrease = monthlyRevenueIncrease * 12;

    // Total yearly benefits
    const yearlyBenefit = yearlyCostSavings + (yearlyRevenueIncrease * profitMargin / 100);
    
    // CONSTRUKTR cost (Pro plan $99/month * team size factor)
    const monthlyCost = teamSize <= 5 ? 99 : 99 + ((teamSize - 5) * 20);
    const yearlyCost = monthlyCost * 12;
    
    // ROI calculation
    const totalROI = ((yearlyBenefit - yearlyCost) / yearlyCost) * 100;
    const paybackPeriod = yearlyCost / (yearlyBenefit / 12);

    setResults({
      timeSaved: timeSavedPerYear,
      costSavings: yearlyCostSavings,
      revenueIncrease: yearlyRevenueIncrease,
      totalROI,
      paybackPeriod,
      yearlyBenefit
    });
  };

  useEffect(() => {
    calculateROI();
  }, [teamSize, avgJobValue, jobsPerMonth, adminHours, conversionRate, profitMargin]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Calculator className="h-8 w-8 text-[#0243D5]" />
          <h2 className="text-4xl font-bold text-gray-900">ROI Calculator</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See exactly how much time and money CONSTRUKTR will save your construction business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="border-2 border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Your Business Details
            </CardTitle>
            <CardDescription>
              Tell us about your construction business to get personalized ROI calculations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Team Size */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Size: {teamSize} people
              </Label>
              <Slider
                value={[teamSize]}
                onValueChange={(value) => setTeamSize(value[0])}
                max={50}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1 person</span>
                <span>50+ people</span>
              </div>
            </div>

            {/* Average Job Value */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Average Job Value</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="number"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="pl-10"
                  placeholder="15000"
                />
              </div>
            </div>

            {/* Jobs Per Month */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Jobs Completed Per Month</Label>
              <Input
                type="number"
                value={jobsPerMonth}
                onChange={(e) => setJobsPerMonth(Number(e.target.value))}
                placeholder="12"
              />
            </div>

            {/* Admin Hours */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Admin Hours Per Week: {adminHours} hours
              </Label>
              <Slider
                value={[adminHours]}
                onValueChange={(value) => setAdminHours(value[0])}
                max={60}
                min={5}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>5 hours</span>
                <span>60+ hours</span>
              </div>
            </div>

            {/* Conversion Rate */}
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Quote Conversion Rate: {conversionRate}%
              </Label>
              <Slider
                value={[conversionRate]}
                onValueChange={(value) => setConversionRate(value[0])}
                max={80}
                min={10}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>10%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Profit Margin */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Profit Margin: {profitMargin}%</Label>
              <Slider
                value={[profitMargin]}
                onValueChange={(value) => setProfitMargin(value[0])}
                max={50}
                min={10}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>10%</span>
                <span>50%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="border-2 border-[#0243D5]/20 bg-gradient-to-br from-[#0243D5]/5 to-white">
          <CardHeader>
            <CardTitle className="text-[#0243D5] text-2xl">Your ROI Results</CardTitle>
            <CardDescription className="text-lg">
              Projected annual benefits with CONSTRUKTR
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {results && (
              <>
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-3xl font-bold text-green-600">
                      {results.totalROI > 0 ? '+' : ''}{Math.round(results.totalROI)}%
                    </div>
                    <div className="text-sm text-gray-600">Annual ROI</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-3xl font-bold text-[#0243D5]">
                      {results.paybackPeriod.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-600">Months to Payback</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">Time Saved Annually</span>
                    <Badge variant="secondary" className="text-base">
                      {Math.round(results.timeSaved)} hours
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">Cost Savings</span>
                    <Badge variant="secondary" className="text-base text-green-600">
                      ${results.costSavings.toLocaleString()}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">Revenue Increase</span>
                    <Badge variant="secondary" className="text-base text-green-600">
                      ${results.revenueIncrease.toLocaleString()}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#0243D5]/10 to-[#0243D5]/20 rounded-lg border border-[#0243D5]/30">
                    <span className="font-semibold text-gray-900">Total Annual Benefit</span>
                    <Badge className="text-lg bg-[#0243D5] hover:bg-[#0243D5]/90">
                      ${Math.round(results.yearlyBenefit).toLocaleString()}
                    </Badge>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      Based on industry averages and CONSTRUKTR user data
                    </p>
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-[#0243D5] hover:bg-[#0243D5]/90 text-white font-semibold py-3"
                        size="lg"
                      >
                        Start Free Trial - Save ${Math.round(results.yearlyBenefit / 12).toLocaleString()}/Month
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#0243D5] text-[#0243D5] hover:bg-[#0243D5]/5"
                      >
                        Schedule Demo Call
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Additional Benefits */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Why Construction Companies Choose CONSTRUKTR</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-[#0243D5]/10 rounded-full flex items-center justify-center mx-auto">
                  <Calculator className="h-8 w-8 text-[#0243D5]" />
                </div>
                <h4 className="font-semibold">103+ Features</h4>
                <p className="text-sm text-gray-600">Replace 17+ separate tools with one comprehensive platform</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-[#0243D5]/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-[#0243D5]" />
                </div>
                <h4 className="font-semibold">96% Completion Rate</h4>
                <p className="text-sm text-gray-600">Industry-leading project completion rates</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-[#0243D5]/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-[#0243D5]" />
                </div>
                <h4 className="font-semibold">1000+ Contractors</h4>
                <p className="text-sm text-gray-600">Trusted by construction professionals nationwide</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}