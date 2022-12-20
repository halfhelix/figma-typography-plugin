import React, {useState} from 'react';
import '../styles/ui.css';
import '../styles/figma_ui.css';
import SettingsPanel from './SettingsPanel';
import CodeOutput from './CodeOutput';
import stringLookup from './StringLookup';

// declare function require(path: string): any;

const App = ({}) => {
    const [outputType, setOutputType] = useState<string>(stringLookup.tailwind);
    const [showTextStyles, setShowTextStyles] = useState<boolean>(true);
    const [fontUnits, setFontUnits] = useState<string>(stringLookup.rem);
    const [fontBaseSize, setFontBaseSize] = useState<number>(16);
    const [breakpointName, setBreakpointName] = useState<string>('sm');
    const [breakpointSize, setBreakpointSize] = useState<number>(768);
    const [showFontImports, setShowFontImports] = useState<boolean>(false);
    const [showColorUnits, setShowColorUnits] = useState<boolean>(false);
    const [colorUnits, setColorUnits] = useState<string>(stringLookup.hex);
    const [showEffects, setShowEffects] = useState<boolean>(false);
    const [showInnerShadows, setShowInnerShadows] = useState<boolean>(false);
    const [showDropShadows, setShowDropShadows] = useState<boolean>(false);
    const [showLayerBlur, setShowLayerBlur] = useState<boolean>(false);
    const [showBackgroundBlur, setShowBackgroundBlur] = useState<boolean>(false);

    return (
        <div className="main">
            <SettingsPanel
                outputType={outputType}
                setOutputType={setOutputType}
                showTextStyles={showTextStyles}
                setShowTextStyles={setShowTextStyles}
                fontUnits={fontUnits}
                setFontUnits={setFontUnits}
                fontBaseSize={fontBaseSize}
                setFontBaseSize={setFontBaseSize}
                breakpointName={breakpointName}
                setBreakpointName={setBreakpointName}
                breakpointSize={breakpointSize}
                setBreakpointSize={setBreakpointSize}
                showFontImports={showFontImports}
                setShowFontImports={setShowFontImports}
                showColorUnits={showColorUnits}
                setShowColorUnits={setShowColorUnits}
                colorUnits={colorUnits}
                setColorUnits={setColorUnits}
                showEffects={showEffects}
                setShowEffects={setShowEffects}
                showInnerShadows={showInnerShadows}
                setShowInnerShadows={setShowInnerShadows}
                showDropShadows={showDropShadows}
                setShowDropShadows={setShowDropShadows}
                showLayerBlur={showLayerBlur}
                setShowLayerBlur={setShowLayerBlur}
                showBackgroundBlur={showBackgroundBlur}
                setShowBackgroundBlur={setShowBackgroundBlur}
            />
            <CodeOutput
                outputType={outputType}
                showTextStyles={showTextStyles}
                fontUnits={fontUnits}
                fontBaseSize={fontBaseSize}
                breakpointName={breakpointName}
                breakpointSize={breakpointSize}
                showFontImports={showFontImports}
                showColorUnits={showColorUnits}
                colorUnits={colorUnits}
                showEffects={showEffects}
                showInnerShadows={showInnerShadows}
                showDropShadows={showDropShadows}
                showLayerBlur={showLayerBlur}
                showBackgroundBlur={showBackgroundBlur}
            />
        </div>
    );
};

export default App;
