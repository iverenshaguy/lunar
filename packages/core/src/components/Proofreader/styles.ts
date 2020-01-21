import { StyleSheet } from '../../hooks/useStyles';
import inputStyleSheet from '../../themes/inputStyleSheet';

export const styleSheet: StyleSheet = theme => {
  const { input, input_important: inputImportant } = inputStyleSheet(theme);
  const { unit } = theme;

  // Add space for controls
  const inputPadding = unit * 2; // pattern.regularButton horizontal padding
  const paddingBottom = inputPadding + unit * 4;

  const { backgroundColor: colorImportant } = inputImportant;

  return {
    proofread: {
      position: 'relative',
      width: '100%',
      '-webkit-text-size-adjust': 'none',

      '@selectors': {
        '> textarea': {
          display: 'block',
          position: 'relative',
          backgroundColor: 'transparent',
          zIndex: 2,
          paddingBottom,
        },
      },
    },

    highlights: {
      ...input,
      position: 'absolute',
      color: 'transparent',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      zIndex: 1,
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      paddingBottom,
    },

    highlights_important: {
      backgroundColor: colorImportant,
    },

    caret: {
      ...input,
      position: 'absolute',
      visibility: 'hidden',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      overflow: 'hidden',
      zIndex: 0,
    },

    controls: {
      pointerEvents: 'none',
      position: 'absolute',
      display: 'flex',
      alignItems: 'flex-end',
      background: input.backgroundColor,
      padding: `${unit}px ${inputPadding}px`,
      boxShadow: `2px -2px 2px 0px ${theme.color.base}`,
      zIndex: 2,
      bottom: 2,
      left: 2,
      // Do not cover scrollbar or resizer
      right: inputPadding + 2,

      '::after': {
        content: '""',
        display: 'block',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        position: 'absolute',
        background:
          // prettier-ignore
          `linear-gradient(to right, ${theme.color.accent.border}, ${theme.color.base})`,
      },
    },

    controls_important: {
      background: colorImportant,
      boxShadow: `2px -2px 2px 0px ${colorImportant}`,
      '::after': {
        background: `linear-gradient(to right, ${theme.color.accent.border}, ${colorImportant})`,
      },
    },

    cell: {
      display: 'block',
      marginRight: unit * 2,
    },
  };
};

export const controlBarStyleSheet: StyleSheet = ({ unit }) => ({
  cell: {
    display: 'inline-block',
    marginRight: unit * 2,
  },
});

export const markStyleSheet: StyleSheet = ({ color, ui }) => ({
  mark: {
    position: 'relative',
    color: 'inherit',
    backgroundColor: 'transparent',
    padding: 1,
    margin: -1,
    transition: 'opacity .2s, background .2s',
    cursor: 'pointer',

    '::after': {
      position: 'absolute',
      display: 'block',
      content: '""',
      bottom: 0,
      left: 0,
      right: 0,
      height: 2,
      borderRadius: ui.borderRadius,
      backgroundColor: color.core.danger[2],
    },
  },

  mark_highlight: {
    borderRadius: ui.borderRadius,
    backgroundColor: color.core.danger[1],

    '::after': {
      display: 'none',
    },
  },

  markSecondary: {
    '::after': {
      backgroundColor: color.core.warning[2],
    },
  },

  markSecondary_highlight: {
    backgroundColor: color.core.warning[1],
  },

  button: {
    display: 'inline',
    background: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    whiteSpace: 'nowrap',
  },
});
