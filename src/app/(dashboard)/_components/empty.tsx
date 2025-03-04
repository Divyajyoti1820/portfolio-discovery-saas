import Image from "next/image";

export const Empty = () => {
  return (
    <div className="w-full h-[calc(100vh-22rem)] sm:h-[calc(100vh-25rem)] xl:h-[36.25rem] flex flex-col gap-y-10 items-center justify-center bg-blue-400 p-2 lg:p-5 rounded-lg">
      <div>
        <Image
          src="/empty.svg"
          alt="No Link Available"
          width={250}
          height={160}
          className="w-[7.8125rem] h-[5rem] md:w-[15.625rem] md:h-[10rem]"
        />
      </div>
      <div className="w-[15.9375rem] md:w-[30.5rem] flex flex-col gap-y-6 items-center justify-center">
        <h3 className="font-bold text-xl md:text-3xl w-full text-center">
          Let&apos;s get your started
        </h3>
        <p className="w-full text-center text-muted-foreground">
          Use the &quot;Add new link&quot; button to get started. Once you have
          more than one link, you can reorder and edit them. We&apos;re here to
          help you share your profiles with everyone.
        </p>
      </div>
    </div>
  );
};
