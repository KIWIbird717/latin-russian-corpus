import { ComponentProps, FC } from "react";
import { Layout } from "./Layout";
import { cn } from "../utils/cn";

type PageProps = ComponentProps<typeof Layout>;
export const Page: FC<PageProps> = ({ children, className, ...props }) => {
  return (
    <Layout
      {...props}
      className={cn(
        "pb-lg gap-lg animate-fade-in mt-[42px] flex min-h-[calc(100vh-120px)] flex-col",
        className,
      )}
    >
      {children}
    </Layout>
  );
};
