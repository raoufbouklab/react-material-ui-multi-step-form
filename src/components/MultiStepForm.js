import { PersonalInfo } from "./step-form/PersonalInfo";
import { Address } from "./step-form/Address";
import { Contact } from "./step-form/Contact";
import { Review } from "./step-form/Review";

export const MultiStepForm = ({ setStep, setOpen, props}) => {
  switch (props.step) {
    case 0:
      return <PersonalInfo {...props} setStep={setStep} setOpen={setOpen}/>;
    case 1:
      return <Address {...props} setStep={setStep} setOpen={setOpen}/>;
    case 2:
      return <Contact {...props}  setStep={setStep} setOpen={setOpen}/>;
    case 3:
      return <Review {...props} setStep={setStep} setOpen={setOpen} />;
  }
};
