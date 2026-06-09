type StoreButtonsProps = {
  googlePlay?: string;
  appStore?: string;
};

export function StoreButtons({ googlePlay, appStore }: StoreButtonsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {googlePlay ? (
        <a
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-strong"
          href={googlePlay}
          target="_blank"
          rel="noreferrer"
        >
          Google Play
        </a>
      ) : null}
      {appStore ? (
        <a
          className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary"
          href={appStore}
          target="_blank"
          rel="noreferrer"
        >
          App Store
        </a>
      ) : null}
    </div>
  );
}
