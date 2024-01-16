export interface IContent {
  title: string;
  description: string;
  index: number;
  image?: string
}

export interface IButton {
  buttonType: "Mac" | "iOS";
}