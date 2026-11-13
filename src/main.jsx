import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: '#fff', background: '#991b1b', padding: '32px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', minHeight: '100vh' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>⚠️ Rendering Crash Detected:</h1>
          <p style={{ fontSize: '16px', color: '#fecaca', marginBottom: '12px' }}>{this.state.error?.toString()}</p>
          <pre style={{ fontSize: '13px', background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '8px', overflowX: 'auto' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
