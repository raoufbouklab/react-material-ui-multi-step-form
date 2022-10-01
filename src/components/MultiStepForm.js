import { PersonalInfo } from "./step-form/PersonalInfo";
import { Address } from "./step-form/Address";
import { Contact } from "./step-form/Contact";
import { Review } from "./step-form/Review";

export const MultiStepForm = ({
  props,
  nextStep,
  prevStep,
  handleClose,
  handleSubmit,
}) => {
  switch (props.step) {
    case 0:
      return (
        <PersonalInfo
          {...props}
          nextStep={nextStep}
          handleClose={handleClose}
        />
      );
    case 1:
      return (
        <Address
          {...props}
          nextStep={nextStep}
          prevStep={prevStep}
          handleClose={handleClose}
        />
      );
    case 2:
      return (
        <Contact
          {...props}
          nextStep={nextStep}
          prevStep={prevStep}
          handleClose={handleClose}
        />
      );
    case 3:
      return (
        <Review
          {...props}
          prevStep={prevStep}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      );
    default:
      console.log("This is a multi-step form built with React.");
  }
};
