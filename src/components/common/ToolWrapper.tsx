type ToolWrapperProps = {
  children: React.ReactNode;
};

export default function ToolWrapper({ children }: ToolWrapperProps) {
  return (
    <div className="w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition duration-300 hover:bg-primary">
      {children}
    </div>
  );
}
