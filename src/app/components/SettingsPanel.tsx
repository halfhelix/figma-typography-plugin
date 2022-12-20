import React from 'react';
import PanelToggle from './PanelToggle';
import stringLookup from './StringLookup';

interface SettingsProps {
    outputType: string;
    setOutputType: React.Dispatch<React.SetStateAction<string>>;
    showTextStyles: boolean;
    setShowTextStyles: React.Dispatch<React.SetStateAction<boolean>>;
    fontUnits: string;
    setFontUnits: React.Dispatch<React.SetStateAction<string>>;
    fontBaseSize: number;
    setFontBaseSize: React.Dispatch<React.SetStateAction<number>>;
    breakpointName: string;
    setBreakpointName: React.Dispatch<React.SetStateAction<string>>;
    breakpointSize: number;
    setBreakpointSize: React.Dispatch<React.SetStateAction<number>>;
    showFontImports: boolean;
    setShowFontImports: React.Dispatch<React.SetStateAction<boolean>>;
    showColorUnits: boolean;
    setShowColorUnits: React.Dispatch<React.SetStateAction<boolean>>;
    colorUnits: string;
    setColorUnits: React.Dispatch<React.SetStateAction<string>>;
    showEffects: boolean;
    setShowEffects: React.Dispatch<React.SetStateAction<boolean>>;
    showInnerShadows: boolean;
    setShowInnerShadows: React.Dispatch<React.SetStateAction<boolean>>;
    showDropShadows: boolean;
    setShowDropShadows: React.Dispatch<React.SetStateAction<boolean>>;
    showLayerBlur: boolean;
    setShowLayerBlur: React.Dispatch<React.SetStateAction<boolean>>;
    showBackgroundBlur: boolean;
    setShowBackgroundBlur: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPanel = (props: SettingsProps) => {
    return (
        <div className="settings-panel">
            {/* <PanelToggle
                title="Output"
                active
            >

                <div className="inputs_inline">
                    <div className="radio">
                        <input
                            id="radio_tailwind"
                            type="radio"
                            className="radio__button"
                            value={stringLookup.tailwind}
                            name="outputType"
                            checked={props.outputType == stringLookup.tailwind}
                            onChange={() => null}
                            onClick={() => {props.setOutputType(stringLookup.tailwind)}}
                        />
                        <label htmlFor="radio_tailwind" className="radio__label">
                            Tailwind
                        </label>
                    </div>

                    <div className="radio">
                        <input
                            id="radio_css"
                            type="radio"
                            value={stringLookup.vanillaCSS}
                            name="outputType"
                            checked={props.outputType == stringLookup.vanillaCSS}
                            onChange={() => null}
                            onClick={() => {props.setOutputType(stringLookup.vanillaCSS)}}
                        />
                        <label htmlFor="radio_css" className="radio__label">
                            Vanilla CSS
                        </label>
                    </div>
                </div>
            </PanelToggle> */}

            <PanelToggle title="Text Styles" active={props.showTextStyles} toggle={props.setShowTextStyles}>
                <div className="input_group">
                    {/* <div className="label">Units</div> */}

                    {/* <div className="inputs_inline">
                        <div className="radio">
                            <input 
                                id="radio_rem" 
                                type="radio"
                                value={stringLookup.rem}
                                name="fontUnits" 
                                checked={props.fontUnits == stringLookup.rem}
                                onChange={() => null}
                                onClick={() => {props.setFontUnits(stringLookup.rem)}}
                            />
                            <label htmlFor="radio_rem" className="radio__label">rem</label>
                        </div>

                        <div className="radio">
                            <input 
                                id="radio_px" 
                                type="radio"
                                value={stringLookup.px}
                                name="fontUnits" 
                                checked={props.fontUnits == stringLookup.px}
                                onChange={() => null}
                                onClick={() => {props.setFontUnits(stringLookup.px)}}
                            />
                            <label htmlFor="radio_px" className="radio__label">px</label>
                        </div>
                    </div> */}
                </div>

                {/* {props.fontUnits == stringLookup.rem ? (
                    <div className="input_group">
                        <div className="range">
                            <div className="range_label_wrapper">
                                <label htmlFor="base_px" className="label">Base Size</label>
                                <output className="range_value text--s">{props.fontBaseSize}</output><p className="range_unit text--s">px</p>
                            </div>
                            <input 
                                id="base_px" 
                                type="range" 
                                className="input__field" 
                                min="10" 
                                max="30" 
                                defaultValue="16"
                                onChange={e => props.setFontBaseSize(parseInt(e.target.value, 10))}
                            />
                        </div>
                    </div>
                ) : ''} */}

                {props.outputType == stringLookup.tailwind ? (
                    <div className="input_group">
                        <div className="text_input">
                            <label htmlFor="breakpoint_name" className="label">
                                Breakpoint
                            </label>
                            <input
                                id="breakpoint_name"
                                type="text"
                                placeholder={props.breakpointName}
                                value={props.breakpointName}
                                className="input__field"
                                onChange={(e) => props.setBreakpointName(e.target.value)}
                            />
                        </div>
                    </div>
                ) : (
                    ''
                    // <div className="input_group">
                    //     <div className="range">
                    //         <div className="range_label_wrapper">
                    //             <label htmlFor="breakpoint_size" className="label">Breakpoint Size</label>
                    //             <output className="range_value text--s">{props.breakpointSize}</output><p className="range_unit text--s">px</p>
                    //         </div>
                    //         <input
                    //             id="breakpoint_size"
                    //             type="range"
                    //             className="input__field"
                    //             min="375"
                    //             max="1024"
                    //             defaultValue={props.breakpointSize}
                    //             onChange={e => props.setBreakpointSize(parseInt(e.target.value, 10))}
                    //         />
                    //     </div>
                    // </div>
                )}

                {/* <div className="switch">
                    <input 
                        className="switch__toggle" 
                        type="checkbox" 
                        id="include_font_imports" 
                        checked={props.showFontImports}
                        onChange={() => null}
                        onClick={() => {props.setShowFontImports(!props.showFontImports)}}
                    />
                    <label className="switch__label" htmlFor="include_font_imports">Include Font Imports</label>
                </div> */}
            </PanelToggle>

            {/* <PanelToggle 
                title="Color Styles"
                active={props.showColorUnits}
                toggle={props.setShowColorUnits}
            >
                <div className="inputs_inline">
                    <div className="radio">
                        <input
                            id="radio_hex"
                            type="radio"
                            className="radio__button"
                            value={stringLookup.hex}
                            name="colorUnit"
                            checked={props.colorUnits == stringLookup.hex}
                            onChange={() => null}
                            onClick={() => {props.setColorUnits(stringLookup.hex)}}
                        />
                        <label htmlFor="radio_hex" className="radio__label">
                            hex
                        </label>
                    </div>

                    <div className="radio">
                        <input
                            id="radio_hsl"
                            type="radio"
                            className="radio__button"
                            value="HSL"
                            name="colorUnit"
                            checked={props.colorUnits == stringLookup.hsl}
                            onChange={() => null}
                            onClick={() => {props.setColorUnits(stringLookup.hsl)}}
                        />
                        <label htmlFor="radio_hsl" className="radio__label">
                            hsl
                        </label>
                    </div>

                    <div className="radio">
                        <input
                            id="radio_rgba"
                            type="radio"
                            className="radio__button"
                            value="rgba"
                            name="colorUnit"
                            checked={props.colorUnits == stringLookup.rgba}
                            onChange={() => null}
                            onClick={() => {props.setColorUnits(stringLookup.rgba)}}
                        />
                        <label htmlFor="radio_rgba" className="radio__label">
                            rgb
                        </label>
                    </div>
                </div>
            </PanelToggle> */}

            {/* <PanelToggle 
                title="Effect Styles"
                active={props.showEffects}
                toggle={props.setShowEffects}
            >

                <div className="switch">
                    <input 
                        className="switch__toggle" 
                        type="checkbox" 
                        id="include_inner_shadows" 
                        checked={props.showInnerShadows}
                        onChange={() => null}
                        onClick={() => {props.setShowInnerShadows(!props.showInnerShadows)}}
                    />
                    <label className="switch__label" htmlFor="include_inner_shadows">Inner Shadows</label>
                </div>

                <div className="switch">
                    <input 
                        className="switch__toggle" 
                        type="checkbox" 
                        id="include_drop_shadows" 
                        checked={props.showDropShadows}
                        onChange={() => null}
                        onClick={() => {props.setShowDropShadows(!props.showDropShadows)}}
                    />
                    <label className="switch__label" htmlFor="include_drop_shadows">Drop Shadows</label>
                </div>

                <div className="switch">
                    <input 
                        className="switch__toggle" 
                        type="checkbox" 
                        id="include_layer_blur" 
                        checked={props.showLayerBlur}
                        onChange={() => null}
                        onClick={() => {props.setShowLayerBlur(!props.showLayerBlur)}}
                    />
                    <label className="switch__label" htmlFor="include_layer_blur">Layer Blur</label>
                </div>

                <div className="switch">
                    <input 
                        className="switch__toggle" 
                        type="checkbox" 
                        id="include_background_blur" 
                        checked={props.showBackgroundBlur}
                        onChange={() => null}
                        onClick={() => {props.setShowBackgroundBlur(!props.showBackgroundBlur)}}
                    />
                    <label className="switch__label" htmlFor="include_background_blur">Background Blur</label>
                </div>

            </PanelToggle> */}

            {/* <PanelToggle title="Form Styles"></PanelToggle> */}
        </div>
    );
};

export default SettingsPanel;
