import * as React from 'react';
import '../styles/ui.css';
import CopyIcon from './CopyIcon';

declare function require(path: string): any;

const App = ({}) => {
    const [outputType, setOutputType] = React.useState('tailwind');
    const [outputUnits, setOutputUnits] = React.useState('rem');
    const [showColors, setShowColors] = React.useState(true);
    const [output, setOutput] = React.useState('');
    const [showTailwindConfig, setShowTailwindConfig] = React.useState(true);

    const handleCreate = () => {
        parent.postMessage(
            {
                pluginMessage: {type: 'output-typography', outputType, outputUnits, showColors},
            },
            '*'
        );
    };

    const handleClose = () => {
        parent.postMessage({pluginMessage: {type: 'close'}}, '*');
    };

    React.useEffect(() => {
        handleCreate();
    }, [outputType, outputUnits, showColors]);

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = ({data: {pluginMessage}}) => {
            setOutput(pluginMessage);
        };
    }, []);

    if (!output) {
        return null;
    }

    return (
        <div className="main">
            <div className="main-wrapper">
                <nav>
                    <button className="close" type="button" onClick={handleClose}>
                        <svg
                            width="6"
                            height="6"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="close-cross"
                        >
                            <path
                                d="M25 1L1.33997 24.66L25 1Z"
                                stroke="black"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                            <path
                                d="M24.66 24.66L1 1L24.66 24.66Z"
                                stroke="black"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                        <p className="sr-only">Close Plugin</p>
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowTailwindConfig(true)}
                        className={`tab ${showTailwindConfig ? 'selected' : ''}`}
                    >
                        <p>tailwind.config.js</p>
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowTailwindConfig(false)}
                        className={`tab ${!showTailwindConfig ? 'selected' : ''}`}
                    >
                        <p>typography.css</p>
                    </button>
                    <a href="https://github.com/codyscott1/figma-typography-plugin/issues" target="_blank">
                        Submit an issue
                    </a>
                </nav>
                <div className="output">
                    <div className="toggles-wrapper">
                        <CopyIcon value={showTailwindConfig ? output.config : output.css} />

                        <button
                            className="toggle"
                            type="button"
                            onClick={() => setOutputUnits(outputUnits === 'rem' ? 'px' : 'rem')}
                        >
                            View in {outputUnits === 'rem' ? 'pixels' : 'rem'}
                        </button>
                        <button className="toggle" type="button" onClick={() => setShowColors(!showColors)}>
                            {showColors ? 'Hide' : 'Show'} colors
                        </button>
                    </div>
                    <textarea
                        spellCheck={false}
                        value={showTailwindConfig ? output.config : output.css}
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
