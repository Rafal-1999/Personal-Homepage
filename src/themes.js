const colors = {
    slateGray: "#667486",
    whiteLilac: "#FBFBFE",
    mercury: "#E5E5E5",
    ironTransparent1: "#D1D5DA4D",
    scienceBlue: "#0366D6",
    white: "#FFFFFF",
    mineShaft: "#252525",
    mineShaftTransparent: "#363636B8",
    dodgerBlue: "#2188FF",
    ironTransparent2: "#D1D5DA1A",
    anakiwa: "#8CC2FF",
    shipCove: "#6D93BE",
    parsleyTransparent: "#14462033",
    violetTransparent1: "#090A3305",
    violetTransparent2: "#090A3308",
    scienceBlueTransparent1: "#0366D633",
    scienceBlueTransparent2: "#0366D6CC",
    scienceBlueTransparent3: "#0366D680",
    dodgerBlueTransparent1: "#2188FF66",
    dodgerBlueTransparent2: "#2188FFCC"
};

const styles = {
    borderRadius: "4px",
    transitionDuration: "1s"
};

export const light = {
    ...styles,
    body: {
        color: colors.slateGray,
        background: colors.whiteLilac
    },
    themeToggle: {
        color: colors.white,
        background1: colors.ironTransparent1,
        background2: colors.slateGray,
        border: colors.slateGray
    },
    filledLink: {
        color: colors.white,
        background: colors.scienceBlue,
        border: colors.ironTransparent1,
        shadow: colors.anakiwa,
        activeShadow: colors.parsleyTransparent
    },
    unfilledLink: {
        color: colors.mineShaft,
        hoverColor: colors.scienceBlue
    },
    socialLink: {
        color: colors.mineShaft,
        hoverColor: colors.scienceBlue
    },
    h1: {
        color: colors.mineShaft
    },
    h2: {
        color: colors.mineShaft
    },
    skills: {
        color: colors.slateGray,
        background1: colors.white,
        background2: colors.scienceBlue,
        shadow1: colors.violetTransparent1,
        shadow2: colors.violetTransparent2,
        border: colors.ironTransparent1
    },
    projects: {
        loaderBackground1: colors.scienceBlue,
        loaderBackground2: colors.ironTransparent1,
        itemBackground: colors.white,
        itemBorder: colors.ironTransparent1,
        itemShadow1: colors.violetTransparent1,
        itemShadow2: colors.violetTransparent2,
        iconColor: colors.scienceBlue,
        textColor1: colors.mineShaft,
        textColor2: colors.slateGray,
        titleColor: colors.scienceBlue,
        linkColor: colors.scienceBlue,
        linkDecorationColor: colors.scienceBlueTransparent1,
        hoverItemBorder: colors.scienceBlueTransparent1,
        hoverLinkDecorationColor: colors.scienceBlueTransparent2
    },
    footer: {
        textColor: colors.mineShaft
    }
};

export const dark = {
    ...styles,
    body: {
        color: colors.white,
        background: colors.mineShaft
    },
    themeToggle: {
        color: colors.mineShaft,
        background1: colors.mineShaftTransparent,
        background2: colors.white,
        border: colors.white
    },
    filledLink: {
        color: colors.white,
        background: colors.dodgerBlue,
        border: colors.ironTransparent2,
        shadow: colors.shipCove,
        activeShadow: colors.parsleyTransparent
    },
    unfilledLink: {
        color: colors.white,
        hoverColor: colors.dodgerBlue
    },
    socialLink: {
        color: colors.white,
        hoverColor: colors.dodgerBlue
    },
    h1: {
        color: colors.white
    },
    h2: {
        color: colors.white
    },
    skills: {
        color: colors.white,
        background1: colors.mineShaftTransparent,
        background2: colors.dodgerBlue,
        shadow1: colors.violetTransparent1,
        shadow2: colors.violetTransparent2,
        border: colors.ironTransparent2
    },
    projects: {
        loaderBackground1: colors.dodgerBlue,
        loaderBackground2: colors.mineShaftTransparent,
        itemBackground: colors.mineShaftTransparent,
        itemBorder: colors.mineShaftTransparent,
        itemShadow1: colors.violetTransparent1,
        itemShadow2: colors.violetTransparent2,
        iconColor: colors.dodgerBlue,
        textColor1: colors.white,
        textColor2: colors.white,
        titleColor: colors.white,
        linkColor: colors.dodgerBlue,
        linkDecorationColor: colors.dodgerBlueTransparent1,
        hoverItemBorder: colors.scienceBlueTransparent3,
        hoverLinkDecorationColor: colors.dodgerBlueTransparent2
    },
    footer: {
        textColor: colors.white
    }
};
