import { Button } from '@/components/ui/button';

type WelcomeViewProps = {
  disabled: boolean;
  onStartCall: () => void;
};

export const WelcomeView = ({
  disabled,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} inert={disabled} className="absolute inset-0">
      <div className="flex h-full items-center justify-between">
        <Button variant="primary" size="lg" onClick={onStartCall} className="w-79 trywakeupbuddy">
          Try Wakeup Buddy
        </Button>
      </div>
    </div>
  );
};
