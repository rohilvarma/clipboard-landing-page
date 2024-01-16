import { IContent } from "./interfaces";
import iconBlacklist from "../public/images/icon-blacklist.svg";
import iconPreview from '../public/images/icon-preview.svg';
import iconText from "../public/images/icon-text.svg";

export const content: IContent[] = [
  {
    index: 0,
    title: "A history of everything you copy",
    description:
      "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
  },
  {
    index: 1,
    title: "Keep track of your snippets",
    description: "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
  },
  {
    index: 2,
    title: "Access Clipboard Anywhere",
    description: "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
  },
  {
    index: 3,
    title: "Supercharge your workflow",
    description: "We've got the tools to boost your productivity."
  },
  {
    index: 4,
    title: "Clipboard for iOS and Mac OS",
    description: "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
  }
];

export const snippetContent: IContent[] = [
  {
    index: 0,
    title: "Quick Search",
    description: "Easily search your snippets bu content, category, web address, application, and more."
  },
  {
    index: 1,
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices."
  },
  {
    index: 2,
    title: "Complete History",
    description: "Retrieve any snippets from the first moment you started using the app."
  }
]

export const workflowContent: IContent[] = [
  {
    index: 0,
    title: "Create blacklists",
    image: iconBlacklist,
    description: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
  },
  {
    index: 1,
    title: "Plain text snippets",
    image: iconText,
    description: "Remove unwanted formatting from copied text for a consistent look."
  },
  {
    index: 2,
    title: "Sneak preview",
    image: iconPreview,
    description: "Quick preview of al snippets on your Clipboard for easy access."
  },
]

export const footerContent: string[] = [
  "FAQs", "Contact Us","Privacy Policy", "Press Kit", "Install Guide"
]