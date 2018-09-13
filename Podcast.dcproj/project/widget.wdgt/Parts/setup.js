/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    'info': { creationFunction: 'CreateInfoButton', foregroundStyle: 'black', onclick: 'showBack', frontID: 'front', backgroundStyle: 'black'  },
    'done': { creationFunction: 'CreateGlassButton', onclick: 'showFront', rightImageWidth: 1, leftImageWidth: 1, text: "Fertig"  },
    'podcastName': { view: 'DC.Text', text: "Mein Podcast"  },
    'episodeDescription': { view: 'DC.Text', text: "Beschreibung der Folge"  },
    'episodeDate': { view: 'DC.Text', text: "Datum der Folge"  },
    'subscribeButton': { creationFunction: 'CreateGlassButton', text: "Abonnieren", onclick: 'subscribe'  },
    'roundedRectangleShape': { creationFunction: 'CreateShape', rightImageWidth: 11, leftImageWidth: 11  },
    'episodeName': { creationFunction: 'CreatePopupButton', onchange: 'changeEpisode', options: ["Name der Folge"], rightImageWidth: 16, leftImageWidth: 8  }
};