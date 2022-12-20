import {mapTypographyConfig, mapTailwindConfig} from './mapOutput';

figma.showUI(__html__, {width: 700, height: 500, themeColors: true});

figma.ui.onmessage = async ({type, outputType, outputUnits, showColors, customBreakpoint}) => {
    if (type === 'success-copy') {
        figma.notify('Copied file contents to clipboard');
    } else if (type === 'fail-copy') {
        figma.notify('Failed to copy to clipboard. See console for details');
    } else if (type === 'close') {
        figma.closePlugin();
    } else if (type === 'output-typography') {
        if (!figma.getLocalTextStyles()?.length) {
            figma.notify('No saved text styles found. Please ensure text styles are saved');
        }

        await figma.loadFontAsync({family: 'Inter', style: 'Regular'});
        try {
            const result =
                outputType === 'tailwind'
                    ? {
                          config: mapTailwindConfig(outputUnits, showColors),
                          css: mapTypographyConfig(customBreakpoint),
                      }
                    : {};
            figma.ui.postMessage(result);
        } catch (error) {
            figma.notify(
                'Whoops! Something went wrong. Please try again or check the console for more details. Ensure text styles are saved'
            );
            console.error(
                "Your fonts could not be generated! Please ensure you have saved text styles. If you're still having issues, please reach out by creating a new issue at https://github.com/codyscott1/figma-typography-plugin/issues . If you could be so kind as to include the error from the console it would be greatly appreciated."
            );
            console.error(JSON.stringify(error));
        }
    }
};
