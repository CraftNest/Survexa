import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, LayoutDashboard, ArrowRight } from 'lucide-react';
import { AccountTypeCard } from '@/components/account-selection/AccountTypeCard';
import { Button } from '@/components/ui/button';

type AccountType = 'respondent' | 'creator' | null;

const AccountSelectionPage = () => {
  const [selectedType, setSelectedType] = useState<AccountType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType === 'creator') {
      navigate('/create-account/surveys');
    } else if (selectedType === 'respondent') {
      navigate('/create-account/respondent');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Choose your account type
          </h1>
          <p className="text-muted-foreground text-lg">
            Select how you want to use Survexa to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
          <AccountTypeCard
            title="Take Surveys & Earn Money"
            description="Join as a respondent, share your opinions, and get rewarded for your time."
            icon={UserCircle}
            isSelected={selectedType === 'respondent'}
            onClick={() => setSelectedType('respondent')}
          />
          <AccountTypeCard
            title="Create Surveys & Get Insights"
            description="Join as a researcher, create targeted surveys, and gather valuable data."
            icon={LayoutDashboard}
            isSelected={selectedType === 'creator'}
            onClick={() => setSelectedType('creator')}
          />
        </div>

        <div className="flex justify-center pt-8">
          <Button 
            size="lg" 
            disabled={!selectedType}
            onClick={handleContinue}
            className="px-8 py-6 text-lg font-semibold transition-all"
          >
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSelectionPage;
