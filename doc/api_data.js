define({ "api": [
  {
    "type": "get",
    "url": "/pdf",
    "title": "obtain a pdf of a page",
    "name": "TakeScreenshot",
    "group": "PDF",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>a url to be looked up (user <a href=\"https://www.wikiwand.com/en/Percent-encoding\">url-encoding</a> to pass querystring parameters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "w",
            "description": "<p>width of the viewport</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "h",
            "description": "<p>height of the viewport</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "d",
            "description": "<p>device to use for the viewport - overwrites other v/h parameters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "pdf",
            "description": "<p>the generated pdf</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "Errors",
            "description": "<p>returned errors</p>"
          }
        ]
      }
    },
    "filename": "src/api.js",
    "groupTitle": "PDF",
    "sampleRequest": [
      {
        "url": "https://snap.openpolis.io/api/pdf"
      }
    ]
  },
  {
    "type": "get",
    "url": "/shot",
    "title": "get a screenshot of a page",
    "name": "TakeScreenshot",
    "group": "Screenshots",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>a url to be looked up (user <a href=\"https://www.wikiwand.com/en/Percent-encoding\">url-encoding</a> to pass querystring parameters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "selector",
            "description": "<p>take a screenshot of a given selector - encoded URI component</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "description": "<p>set a timeout, in ms; defaults to 1000</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>the generated screenshot</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "Errors",
            "description": "<p>returned errors</p>"
          }
        ]
      }
    },
    "filename": "src/api.js",
    "groupTitle": "Screenshots",
    "sampleRequest": [
      {
        "url": "https://snap.openpolis.io/api/shot"
      }
    ]
  }
] });
