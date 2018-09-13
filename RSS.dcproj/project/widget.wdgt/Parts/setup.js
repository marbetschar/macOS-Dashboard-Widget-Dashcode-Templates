/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    'info': { creationFunction: 'CreateInfoButton', frontID: 'front', foregroundStyle: 'white', backgroundStyle: 'black', onclick: 'showBack'  },
    'done': { creationFunction: 'CreateGlassButton', text: "Fertig", onclick: 'showFront'  },
    'topRectangleShape': { creationFunction: 'CreateShape', rightImageWidth: 12, leftImageWidth: 12  },
    'bottomRectangleShape': { creationFunction: 'CreateShape', rightImageWidth: 12, leftImageWidth: 12  },
    'contentarea': { creationFunction: 'CreateScrollArea', spacing: 11, leftMargin: 11, rightMargin: 7, hasVerticalScrollbar: true, autoHideScrollbars: true, scrollbarMargin: 6, scrollbarDivSize: 18  },
    'feedTitle': { view: 'DC.Text', text: "Mein RSS-Feed"  },
    'loading-text': { view: 'DC.Text', text: "Laden"  },
    'article-length': { view: 'DC.Text', text: "Artikellänge"  }
};