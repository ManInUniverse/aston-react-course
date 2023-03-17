import React, { ErrorInfo, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  children: JSX.Element;
}>;

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl">{'Oops... Something went wrong :('}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
