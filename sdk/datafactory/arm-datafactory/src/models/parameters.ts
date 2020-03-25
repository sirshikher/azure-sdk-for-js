/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const dataFlowName: msRest.OperationURLParameter = {
  parameterPath: "dataFlowName",
  mapper: {
    required: true,
    serializedName: "dataFlowName",
    constraints: {
      MaxLength: 260,
      MinLength: 1,
      Pattern: /^[A-Za-z0-9_][^<>*#.%&:\\+?\/]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const datasetName: msRest.OperationURLParameter = {
  parameterPath: "datasetName",
  mapper: {
    required: true,
    serializedName: "datasetName",
    constraints: {
      MaxLength: 260,
      MinLength: 1,
      Pattern: /^[A-Za-z0-9_][^<>*#.%&:\\+?\/]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const factoryName: msRest.OperationURLParameter = {
  parameterPath: "factoryName",
  mapper: {
    required: true,
    serializedName: "factoryName",
    constraints: {
      MaxLength: 63,
      MinLength: 3,
      Pattern: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
    },
    type: {
      name: "String"
    }
  }
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifNoneMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifNoneMatch"
  ],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};
export const integrationRuntimeName: msRest.OperationURLParameter = {
  parameterPath: "integrationRuntimeName",
  mapper: {
    required: true,
    serializedName: "integrationRuntimeName",
    constraints: {
      MaxLength: 63,
      MinLength: 3,
      Pattern: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
    },
    type: {
      name: "String"
    }
  }
};
export const isRecovery: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "isRecovery"
  ],
  mapper: {
    serializedName: "isRecovery",
    type: {
      name: "Boolean"
    }
  }
};
export const isRecursive: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "isRecursive"
  ],
  mapper: {
    serializedName: "isRecursive",
    type: {
      name: "Boolean"
    }
  }
};
export const linkedServiceName: msRest.OperationURLParameter = {
  parameterPath: "linkedServiceName",
  mapper: {
    required: true,
    serializedName: "linkedServiceName",
    constraints: {
      MaxLength: 260,
      MinLength: 1,
      Pattern: /^[A-Za-z0-9_][^<>*#.%&:\\+?\/]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const locationId: msRest.OperationURLParameter = {
  parameterPath: "locationId",
  mapper: {
    required: true,
    serializedName: "locationId",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const nodeName: msRest.OperationURLParameter = {
  parameterPath: "nodeName",
  mapper: {
    required: true,
    serializedName: "nodeName",
    constraints: {
      MaxLength: 150,
      MinLength: 1,
      Pattern: /^[a-z0-9A-Z][a-z0-9A-Z_-]{0,149}$/
    },
    type: {
      name: "String"
    }
  }
};
export const pipelineName: msRest.OperationURLParameter = {
  parameterPath: "pipelineName",
  mapper: {
    required: true,
    serializedName: "pipelineName",
    constraints: {
      MaxLength: 260,
      MinLength: 1,
      Pattern: /^[A-Za-z0-9_][^<>*#.%&:\\+?\/]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const referencePipelineRunId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "referencePipelineRunId"
  ],
  mapper: {
    serializedName: "referencePipelineRunId",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const runId: msRest.OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    required: true,
    serializedName: "runId",
    type: {
      name: "String"
    }
  }
};
export const startActivityName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "startActivityName"
  ],
  mapper: {
    serializedName: "startActivityName",
    type: {
      name: "String"
    }
  }
};
export const startFromFailure: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "startFromFailure"
  ],
  mapper: {
    serializedName: "startFromFailure",
    type: {
      name: "Boolean"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const triggerName: msRest.OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    required: true,
    serializedName: "triggerName",
    constraints: {
      MaxLength: 260,
      MinLength: 1,
      Pattern: /^[A-Za-z0-9_][^<>*#.%&:\\+?\/]*$/
    },
    type: {
      name: "String"
    }
  }
};