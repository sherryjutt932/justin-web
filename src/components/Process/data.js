import discovery from "../../assests/icons/Process/discovery.svg";
import strategy from "../../assests/icons/Process/strategy.svg";
import design from "../../assests/icons/Process/design.svg";
import development from "../../assests/icons/Process/development.svg";

export default function data() {
    const icons = [
        {
          label: "Discovery",
          detail: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
          img: discovery,
        },
        {
          label: "Strategy",
          detail: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth cycle reviews, we're here to set the stage for success.",
          img: strategy,
        },
        {
          label: "Design",
          detail: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
          img: design,
        },
        {
          label: "Development",
          detail: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
          img: development,
        },
        
      ];

  return icons
}
