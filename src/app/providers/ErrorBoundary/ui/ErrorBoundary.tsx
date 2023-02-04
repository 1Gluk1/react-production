import React, {type ErrorInfo, type ReactNode, Suspense} from 'react';
import {PageError} from 'widgets/PageError';

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	static getDerivedStateFromError() {
		return {hasError: true};
	}

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		const {hasError} = this.state;
		const {children} = this.props;

		if (hasError) {
			return <Suspense fallback={''}>
				<PageError/>
			</Suspense>;
		}

		return children;
	}
}
