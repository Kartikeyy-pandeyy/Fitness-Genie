import { IntegrationDefinition, messages } from '@botpress/sdk'
import { z } from 'zod'
<script src=""></script>
"flows" [
    {
      "id": "wf-error",
      "name": "Error",
      "startNode": "nd-98dc0bcc87",
      "variables": [],
      "links": [
        {
          "id": "edg-1cb5862648",
          "source": "nd-98dc0bcc87",
          "sourcePort": "trs-02c7129430",
          "target": "nd-58fca56e01"
        },
        {
          "id": "edg-1c28c96d6a",
          "source": "nd-58fca56e01",
          "sourcePort": "nd-58fca56e01",
          "target": "nd-e05f59dd66"
        }
      ],
      "nodes": [
        {
          "comment": "<p><strong><span style=\"font-size: 18px\">⛔️ When something goes wrong</span></strong></p><p><br>This workflow is executed when there's an <strong>unexpected error</strong> in one of the other workflows.</p><p></p><p>You can use this to inform the user of the situation before ending the conversation.</p>",
          "type": "comment",
          "id": "nd-8ff3d7d295",
          "name": "Comment1",
          "deletable": true,
          "instructions": [],
          "height": 148,
          "width": 401,
          "x": 90,
          "y": -45
        },
        {
          "instructions": [
            {
              "id": "ins-2762f70004",
              "type": "content",
              "content": {
                "type": "text",
                "text": {
                  "staticValue": "Sorry, an error occurred. Please try again later",
                  "dynamicValue": "",
                  "valueType": "static"
                },
                "typing": {
                  "valueType": "static",
                  "staticValue": true
                }
              },
              "nodeId": "nd-58fca56e01"
            }
          ],
          "defaultTransition": {
            "targetNodeId": "nd-e05f59dd66"
          },
          "type": "standard",
          "id": "nd-58fca56e01",
          "name": "Handler",
          "deletable": true,
          "x": 450,
          "y": 120
        },
        {
          "id": "nd-98dc0bcc87",
          "name": "On_Error",
          "type": "entry",
          "deletable": false,
          "variables": [],
          "instructions": [
            {
              "id": "trs-02c7129430",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "nd-58fca56e01"
              }
            }
          ],
          "x": 90,
          "y": 120
        },
        {
          "id": "nd-e05f59dd66",
          "name": "End",
          "type": "end",
          "variables": [],
          "deletable": false,
          "instructions": [
            {
              "id": "trs-945140a646",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "END"
              }
            }
          ],
          "x": 810,
          "y": 120
        }
      ]
    },
    {
      "id": "wf-timeout",
      "name": "Timeout",
      "startNode": "nd-9f7f3268ac",
      "variables": [],
      "links": [
        {
          "id": "edg-b0d2adcd13",
          "source": "nd-e6c012a652",
          "sourcePort": "nd-e6c012a652",
          "target": "nd-199fdcf439"
        },
        {
          "id": "edg-6d17a0591b",
          "source": "nd-9f7f3268ac",
          "sourcePort": "trs-0c7a9a0003",
          "target": "nd-e6c012a652"
        }
      ],
      "nodes": [
        {
          "instructions": [],
          "defaultTransition": {
            "targetNodeId": "nd-199fdcf439"
          },
          "type": "standard",
          "id": "nd-e6c012a652",
          "name": "Handler",
          "deletable": true,
          "x": 435,
          "y": 105
        },
        {
          "comment": "<p><strong><span style=\"font-size: 18px\">⌛️ When conversation times out</span></strong></p><p><br>This workflow is executed when the conversation <strong>times out</strong> before it had time to flow to an <strong>End Node</strong>.</p><p></p><p>The <strong>Timeout Delay</strong> is configurable in the <strong>Chatbot Settings.</strong></p><p></p><p>You can use this to inform the user of the situation before ending the conversation.</p>",
          "type": "comment",
          "id": "nd-441efa6c42",
          "name": "Comment1",
          "deletable": true,
          "instructions": [],
          "height": 173,
          "width": 401,
          "x": 105,
          "y": -90
        },
        {
          "id": "nd-9f7f3268ac",
          "name": "On_Timeout",
          "type": "entry",
          "deletable": false,
          "variables": [],
          "instructions": [
            {
              "id": "trs-0c7a9a0003",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "nd-e6c012a652"
              }
            }
          ],
          "x": 100,
          "y": 100
        },
        {
          "id": "nd-199fdcf439",
          "name": "End",
          "type": "end",
          "variables": [],
          "deletable": false,
          "instructions": [
            {
              "id": "trs-bf76943d55",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "END"
              }
            }
          ],
          "x": 795,
          "y": 105
        }
      ]
    },
    {
      "id": "wf-conversation-end",
      "name": "Conversation End",
      "startNode": "nd-c0d3bd2c92",
      "variables": [],
      "links": [
        {
          "id": "edg-3cb8028ff6",
          "source": "nd-c0d3bd2c92",
          "sourcePort": "trs-92c6f93b0c",
          "target": "nd-2db7499cc6"
        },
        {
          "id": "edg-8a88f687a0",
          "source": "nd-2db7499cc6",
          "sourcePort": "nd-2db7499cc6",
          "target": "nd-d0c2a6be81"
        }
      ],
      "nodes": [
        {
          "instructions": [],
          "defaultTransition": {
            "targetNodeId": "nd-d0c2a6be81"
          },
          "type": "standard",
          "id": "nd-2db7499cc6",
          "name": "Handler",
          "deletable": true,
          "x": 420,
          "y": 105
        },
        {
          "comment": "<p><strong><span style=\"font-size: 18px\">👋 Before Conversation Ends</span></strong></p><p><br>This workflow is executed when right before the conversation <strong>Ends Explicitly.</strong></p><p></p><p>An <strong>Explicit Ending</strong> happens when a workflow transitions on an <strong>End Node</strong>.</p>",
          "type": "comment",
          "id": "nd-6d5d3f41dd",
          "name": "Comment1",
          "deletable": true,
          "instructions": [],
          "height": 148,
          "width": 461,
          "x": 105,
          "y": -45
        },
        {
          "id": "nd-c0d3bd2c92",
          "name": "On_Explicit_Ending",
          "type": "entry",
          "deletable": false,
          "variables": [],
          "instructions": [
            {
              "id": "trs-92c6f93b0c",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "nd-2db7499cc6"
              }
            }
          ],
          "x": 100,
          "y": 100
        },
        {
          "id": "nd-d0c2a6be81",
          "name": "End",
          "type": "end",
          "variables": [],
          "deletable": false,
          "instructions": [
            {
              "id": "trs-7004dbb2b6",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "END"
              }
            }
          ],
          "x": 780,
          "y": 105
        }
      ]
    },
    {
      "topicId": "tpc-global",
      "id": "wf-main",
      "name": "Main",
      "startNode": "nd-2bb9db230d",
      "variables": [
        {
          "id": "var-0c9e584437",
          "name": "intro",
          "type": "string",
          "description": "",
          "scope": "workflow"
        },
        {
          "id": "var-7991f865e7",
          "name": "answer",
          "type": "string",
          "description": "",
          "scope": "workflow"
        }
      ],
      "links": [
        {
          "id": "edg-b086a2a178",
          "source": "nd-2bb9db230d",
          "sourcePort": "trs-8b0779edc5",
          "target": "nd-83a5699645"
        }
      ],
      "nodes": [
        {
          "instructions": [
            {
              "id": "ins-5371b72e75",
              "type": "capture",
              "entityId": "prompts://RawInput/v1",
              "entityName": "Raw Input",
              "kbPriority": {
                "enabled": true,
                "searchScope": "all",
                "kbs": []
              },
              "nodeId": "nd-83a5699645",
              "variableId": "var-0c9e584437",
              "question": {
                "valueType": "dynamic",
                "dynamicValue": "Hello I am your Fitness Genie\nI can give workout routine,\ndiet chart,calculate daily calorie intake and much more..",
                "staticValue": ""
              },
              "validation": {
                "validators": []
              },
              "choice": {
                "options": {
                  "staticValue": [],
                  "dynamicValue": "",
                  "valueType": "static"
                }
              },
              "retry": {
                "maxRetries": 2,
                "retryMessage": {
                  "staticValue": "",
                  "dynamicValue": "",
                  "valueType": "dynamic"
                }
              },
              "cancellation": {
                "cancellable": true,
                "confirmCancel": true,
                "confirmCancelMessage": {
                  "staticValue": "",
                  "dynamicValue": "",
                  "valueType": "static"
                }
              },
              "handleFailure": false,
              "historyLookback": 0,
              "skipIfAlreadyFilled": false,
              "transitions": [],
              "prompt": {
                "messages": [
                  {
                    "role": "system",
                    "content": "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON."
                  },
                  {
                    "role": "user",
                    "content": "```typescript\n/** The user answer to the question \"undefined\" */\ninterface Output = { value: any }\n```\n\nHere is a conversation between me and a user. Transcript:\n\"\"\"\n(...)\nagent: undefined\nuser: undefined\n\"\"\""
                  },
                  {
                    "role": "assistant",
                    "content": "{}"
                  },
                  {
                    "role": "user",
                    "content": "\nNow, forget about the previous transcripts. These were just examples, don't consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question \"{{QUESTION}}\" */\ninterface Output = { value: any }\n```\n\nHere is a conversation between me and a user. Transcript:\n\"\"\"\n(...)\n{{TRANSCRIPT}}\n\"\"\"\n\nIn the last user message, here are the entities found:\n\"\"\"\nENTITIES_IDENTIFIED\n\"\"\"\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\n\n\n\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON."
                  }
                ],
                "model": "gpt-3.5-turbo",
                "temperature": 0,
                "signatureVersion": "Jun-2023",
                "signature": "wsDIMaSsJ1YTaWLaNEaV5IgB+C2qyh801nUa4CdCsmubxvThog1rJ7tYXwHKDnA4cpOm6gnznXN6AdKJSoh/tbRxO1abxj04bRbCn9y7BZ8i3qZQl1Le5PIaAmfampxeHFl8IasZNZYi5uWVQnd1IPS3iFv6wYhBGa/EPlz+AagSKdqmn11u/DSAfrYixnA2rW+XEORrVeVMt1P8zFU7ssoTSSNt7LZh1xmH0amoWFad2vSDxu/2eU55NZSGFlB8a1soPEGYq83QN6mHXldjsO1mEV7cHWsSBZPTXG37GipXEbYKe/9sQNwg6mpBLIuvbliiJ9DvjkkSyXQVkVhTyg=="
              }
            },
            {
              "type": "ai-generate",
              "id": "ins-f875b11c26",
              "task": {
                "model": "gpt-4-1106-preview",
                "temperature": 0.3,
                "input": {
                  "staticValue": null,
                  "valueType": "dynamic",
                  "dynamicValue": "act as an fitness expert for the user you should be able to suggest diet, exercises and customize heavily for @workflow.intro .Answer according to users demand but also in very limited words and in points."
                },
                "outputVariableId": "var-7991f865e7",
                "maxTokenLength": {
                  "staticValue": 4000,
                  "valueType": "static",
                  "dynamicValue": ""
                }
              },
              "nodeId": "nd-83a5699645",
              "prompt": {
                "messages": [
                  {
                    "role": "system",
                    "content": "Answer the following prompt in under {{GENERATION_LENGTH}} completion tokens.\nPrompt:{{GENERATION_INPUT}}"
                  }
                ],
                "model": "gpt-4-1106-preview",
                "signatureVersion": "Jun-2023",
                "temperature": 0.3,
                "signature": "bsqgmWCG3ejZHsxwnZFatvv9vc0+Qc+HHvZ8HfR1260jjXSAhoWjZuEV21H+4SHnc2r9eAADyqZmEurKn2zq+znne6gxLPCFDUVYMNXDYLRHFuKTbRix90Cf8opy/W7GraJ71vNAHgxHdIpo3tLa1SvPLJzUE2x2vY/paYByXESzMY3AWUkXEtOY9zbgMWj/g9qBS7kLH5hri+fEyM2U8RJz9qQ9ya1sVv+o2EOA04pZaknXwwtsibwAbT/jG5pyUQgF95GL1t10dahHHFZTZOnoLE5zF02nPH8B0Y3ChRDg0r0luta0Rf99GIkBa1pGTSdhLmfFHAxye9ZVLIb5vg=="
              }
            },
            {
              "id": "ins-e904c015ca",
              "type": "content",
              "content": {
                "type": "text",
                "text": {
                  "valueType": "dynamic",
                  "dynamicValue": "@workflow.answer ",
                  "staticValue": ""
                },
                "typing": {
                  "valueType": "static",
                  "staticValue": true
                }
              },
              "nodeId": "nd-83a5699645"
            }
          ],
          "type": "standard",
          "id": "nd-83a5699645",
          "name": "Add_Stuff_Here",
          "deletable": true,
          "x": -75,
          "y": -600
        },
        {
          "id": "nd-2bb9db230d",
          "name": "Start",
          "type": "start",
          "deletable": false,
          "instructions": [
            {
              "id": "trs-8b0779edc5",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "nd-83a5699645"
              }
            }
          ],
          "x": -345,
          "y": -540,
          "kbPriority": {
            "enabled": true,
            "searchScope": "specific",
            "kbs": [
              "kb-2f0a7ea639"
            ]
          }
        },
        {
          "id": "nd-80ac4ff158",
          "name": "End",
          "type": "end",
          "deletable": false,
          "instructions": [
            {
              "id": "trs-0260f5e672",
              "type": "transition",
              "condition": {
                "type": "expression",
                "payload": "true"
              },
              "destination": {
                "node": "END"
              }
            }
          ],
          "x": 345,
          "y": -570
        }
      ],
      "parentFolder": "root"
    }
  ]
