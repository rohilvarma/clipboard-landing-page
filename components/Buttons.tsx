import { Button } from ".";
const Buttons = () => {
  return (
    <div className="flex flex-col gap-y-6 sm:gapy-y-0 sm:flex-row sm:justify-center sm:items-center sm:gap-4 mt-12">
      <Button buttonType="iOS" />
      <Button buttonType="Mac" />
    </div>
  );
};

export default Buttons;
