openApiSpec = {
  "openapi":"3.0.1",
  "info":{
    "title":"Aerospike REST Client",
    "description":"REST Interface for Aerospike Database.",
    "contact":{
      "name":"Aerospike, Inc.",
      "url":"https://www.aerospike.com"
    },
    "license":{
      "name":"Apache 2.0 License",
      "url":"http://www.apache.org/licenses/LICENSE-2.0"
    },
    "version":"1.10.2"
  },
  "servers":[
    {
      "url":"http://localhost:8080",
      "description":"Generated server url"
    }
  ],
  "tags":[
    {
      "name":"Scan Operations",
      "description":"Read records in specified namespace, set."
    },
    {
      "name":"Admin Operations",
      "description":"Manage users and privileges."
    },
    {
      "name":"Secondary Index methods",
      "description":"Manage secondary indexes."
    },
    {
      "name":"Key Value Operations",
      "description":"Perform simple operations on a single record."
    },
    {
      "name":"Batch Read Operations",
      "description":"Retrieve multiple records from the server."
    },
    {
      "name":"Cluster information operations",
      "description":"Retrieve basic information about the Aerospike cluster."
    },
    {
      "name":"Execute Operations",
      "description":"Execute operations in background scan/query."
    },
    {
      "name":"Info Operations",
      "description":"Send info commands to nodes in the Aerospike cluster."
    },
    {
      "name":"Document API Operations",
      "description":"Perform operations on records using JSONPath queries."
    },
    {
      "name":"Truncate Operations",
      "description":"Remove multiple records from the server."
    },
    {
      "name":"Operate operations",
      "description":"Perform multiple operations atomically on a single record."
    }
  ],
  "paths":{
    "/v1/kvs/{namespace}/{set}/{key}":{
      "get":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Return the metadata and bins for a record.",
        "operationId":"getRecordNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Metadata and bins for a record returned successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "put":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Replace the bins of the specified record.",
        "operationId":"replaceRecordNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Modified record successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Create a new record with the provided bins into the record.",
        "operationId":"createRecordNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "201":{
            "description":"Created a new record successfully."
          },
          "404":{
            "description":"Namespace does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Record Already exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "delete":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Delete the specified record.",
        "operationId":"deleteRecordNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Deleted a record successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "head":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"recordExistsNamespaceSetKey",
        "operationId":"Check if a record exists",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "required":false,
            "schema":{
              "type":"string",
              "enum":[
                "STRING",
                "INTEGER",
                "BYTES",
                "DIGEST"
              ]
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Record exists indication returned successfully."
          },
          "404":{
            "description":"Record does not exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "patch":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Merge the provided bins into the record.",
        "operationId":"updateRecordNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Modified record successfully, no content expected."
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record does not exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/kvs/{namespace}/{key}":{
      "get":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Return the metadata and bins for a record.",
        "operationId":"getRecordNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Metadata and bins for a record returned successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "put":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Replace the bins of the specified record.",
        "operationId":"replaceRecordNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Modified record successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Create a new record with the provided bins into the record.",
        "operationId":"createRecordNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "201":{
            "description":"Created a new record successfully."
          },
          "404":{
            "description":"Namespace does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Record Already exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "delete":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Delete the specified record.",
        "operationId":"deleteRecordNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Deleted a record successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "head":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Check if a record exists",
        "operationId":"recordExistsNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "required":false,
            "schema":{
              "type":"string",
              "enum":[
                "STRING",
                "INTEGER",
                "BYTES",
                "DIGEST"
              ]
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "404":{
            "description":"Record does not exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Record exists indication returned successfully."
          }
        }
      },
      "patch":{
        "tags":[
          "Key Value Operations"
        ],
        "summary":"Merge the provided bins into the record.",
        "operationId":"updateRecordNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"Bins to be stored in the record. This is a mapping from a string bin name to a value. Value can be a String, integer, floating point number, list, map, bytearray, or GeoJSON value. Bytearrays and GeoJSON can only be sent using MessagePack\n example: {\"bin1\":5, \"bin2\":\"hello\", \"bin3\": [1,2,3], \"bin4\": {\"one\": 1}}",
          "content":{
            "application/json":{
              "schema":{
                "type":"object",
                "additionalProperties":{
                  "type":"object"
                }
              },
              "examples":{
                "Bins request body example":{
                  "description":"Bins request body example",
                  "value":{
                    "bin1":5,
                    "bin2":"hello",
                    "bin3":[
                      1,
                      2,
                      3
                    ],
                    "bin4":{
                      "one":1
                    }
                  }
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Generation mismatch for operation.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Modified record successfully, no content expected."
          },
          "400":{
            "description":"Invalid parameters or request",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record does not exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/document/{namespace}/{set}/{key}":{
      "get":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Retrieve the object in the document with key documentKey that is referenced by the JSON path.",
        "operationId":"getDocumentObjectSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "200":{
            "description":"Document read successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Get document object response example":{
                    "description":"Get document object response example",
                    "value":{
                      "docBin2":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ],
                      "docBin1":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ]
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Get document object response example":{
                    "description":"Get document object response example",
                    "value":{
                      "docBin2":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ],
                      "docBin1":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ]
                    }
                  }
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "put":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Put a document.",
        "operationId":"putDocumentObjectSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"JSON Object",
          "content":{
            "application/json":{
              "schema":{
                "type":"object"
              },
              "examples":{
                "JSON object request body example":{
                  "description":"JSON object request body example",
                  "value":"str3"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to put a document has been accepted."
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Append an object to a list in a document specified by a JSON path.",
        "operationId":"appendDocumentObjectSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"JSON Object",
          "content":{
            "application/json":{
              "schema":{
                "type":"object"
              },
              "examples":{
                "JSON object request body example":{
                  "description":"JSON object request body example",
                  "value":"str3"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to append an object to a list in a document has been accepted."
          }
        }
      },
      "delete":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Delete an object in a document specified by a JSON path.",
        "operationId":"deleteDocumentObjectSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Deleted an object in a document successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/document/{namespace}/{key}":{
      "get":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Retrieve the object in the document with key documentKey that is referenced by the JSON path.",
        "operationId":"getDocumentObject",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "200":{
            "description":"Document read successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Get document object response example":{
                    "description":"Get document object response example",
                    "value":{
                      "docBin2":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ],
                      "docBin1":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ]
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Get document object response example":{
                    "description":"Get document object response example",
                    "value":{
                      "docBin2":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ],
                      "docBin1":[
                        "A1",
                        "B1",
                        "C1",
                        "D1"
                      ]
                    }
                  }
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "put":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Put a document.",
        "operationId":"putDocumentObject",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"JSON Object",
          "content":{
            "application/json":{
              "schema":{
                "type":"object"
              },
              "examples":{
                "JSON object request body example":{
                  "description":"JSON object request body example",
                  "value":"str3"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to put a document has been accepted."
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Append an object to a list in a document specified by a JSON path.",
        "operationId":"appendDocumentObject",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "description":"JSON Object",
          "content":{
            "application/json":{
              "schema":{
                "type":"object"
              },
              "examples":{
                "JSON object request body example":{
                  "description":"JSON object request body example",
                  "value":"str3"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to append an object to a list in a document has been accepted."
          }
        }
      },
      "delete":{
        "tags":[
          "Document API Operations"
        ],
        "summary":"Delete an object in a document specified by a JSON path.",
        "operationId":"deleteDocumentObject",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"User key for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Specify a set of bins to handle the JSONPath query.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"jsonPath",
            "in":"query",
            "description":"JSONPath query parameter.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "204":{
            "description":"Deleted an object in a document successfully, no content expected."
          },
          "404":{
            "description":"Record not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/operate/{namespace}/{set}/{key}":{
      "post":{
        "tags":[
          "Operate operations"
        ],
        "summary":"Perform multiple operations atomically on the specified record.",
        "operationId":"operateNamespaceSetKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "200":{
            "description":"Multiple operations on a record performed successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              }
            }
          },
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/operate/{namespace}/{key}":{
      "post":{
        "tags":[
          "Operate operations"
        ],
        "summary":"Perform multiple operations atomically on the specified record.",
        "operationId":"operateNamespaceKey",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"key",
            "in":"path",
            "description":"Userkey for the record.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "200":{
            "description":"Multiple operations on a record performed successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRecord"
                }
              }
            }
          },
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/operate/read/{namespace}":{
      "post":{
        "tags":[
          "Operate operations"
        ],
        "summary":"Perform read operations on multiple records.",
        "operationId":"operateBatchNamespace",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"allowInline",
            "in":"query",
            "description":"Allow batch to be processed immediately in the server's receiving thread when the server deems it to be appropriate.  If false, the batch will always be processed in separate transaction threads.  This field is only relevant for the new batch index protocol.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"maxConcurrentThreads",
            "in":"query",
            "description":"Maximum number of concurrent synchronous batch request threads to server nodes at any point in time. If there are 16 node/namespace combinations requested and maxConcurrentThreads is 8, then batch requests will be made for 8 node/namespace combinations in parallel threads. When a request completes, a new request will be issued until all 16 requests are complete.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sendSetName",
            "in":"query",
            "description":"Send set name field to server for every key in the batch for batch index protocol.\nThis is only necessary when authentication is enabled and security roles are defined on a per set basis.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"key",
            "in":"query",
            "description":"Record keys to perform operations on.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Read operations on multiple records performed successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRecord"
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRecord"
                  }
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/operate/read/{namespace}/{set}":{
      "post":{
        "tags":[
          "Operate operations"
        ],
        "summary":"Perform read operations on multiple records.",
        "operationId":"operateBatchNamespaceSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"allowInline",
            "in":"query",
            "description":"Allow batch to be processed immediately in the server's receiving thread when the server deems it to be appropriate.  If false, the batch will always be processed in separate transaction threads.  This field is only relevant for the new batch index protocol.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"maxConcurrentThreads",
            "in":"query",
            "description":"Maximum number of concurrent synchronous batch request threads to server nodes at any point in time. If there are 16 node/namespace combinations requested and maxConcurrentThreads is 8, then batch requests will be made for 8 node/namespace combinations in parallel threads. When a request completes, a new request will be issued until all 16 requests are complete.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sendSetName",
            "in":"query",
            "description":"Send set name field to server for every key in the batch for batch index protocol.\nThis is only necessary when authentication is enabled and security roles are defined on a per set basis.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"key",
            "in":"query",
            "description":"Record keys to perform operations on.",
            "required":true,
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Read operations on multiple records performed successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRecord"
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRecord"
                  }
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/info":{
      "post":{
        "tags":[
          "Info Operations"
        ],
        "summary":"Send a list of info commands to a random node in the cluster",
        "operationId":"infoAny",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "description":"An array of info commands to send to the server. See https://www.aerospike.com/docs/reference/info/ for a list of valid commands.",
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "Array of info commands request body example":{
                  "description":"Array of info commands request body example",
                  "value":[
                    "build",
                    "edition"
                  ]
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "Array of info commands request body example":{
                  "description":"Array of info commands request body example",
                  "value":[
                    "build",
                    "edition"
                  ]
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to perform the info command.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Commands sent successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Info response example":{
                    "description":"Info response example",
                    "value":{
                      "edition":"Aerospike Enterprise Edition",
                      "name":"BB9DE9B1B270008"
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Info response example":{
                    "description":"Info response example",
                    "value":{
                      "edition":"Aerospike Enterprise Edition",
                      "name":"BB9DE9B1B270008"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v1/info/{node}":{
      "post":{
        "tags":[
          "Info Operations"
        ],
        "summary":"Send a list of info commands to a specific node in the cluster.",
        "operationId":"infoNode",
        "parameters":[
          {
            "name":"node",
            "in":"path",
            "description":"The node ID for the node which will receive the info commands.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "description":"An array of info commands to send to the server. See https://www.aerospike.com/docs/reference/info/ for a list of valid commands.",
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "Array of info commands request body example":{
                  "description":"Array of info commands request body example",
                  "value":[
                    "build",
                    "edition"
                  ]
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "Array of info commands request body example":{
                  "description":"Array of info commands request body example",
                  "value":[
                    "build",
                    "edition"
                  ]
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to perform the info command",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"The specified Node does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Commands sent successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Info response example":{
                    "description":"Info response example",
                    "value":{
                      "edition":"Aerospike Enterprise Edition",
                      "name":"BB9DE9B1B270008"
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Info response example":{
                    "description":"Info response example",
                    "value":{
                      "edition":"Aerospike Enterprise Edition",
                      "name":"BB9DE9B1B270008"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v1/index":{
      "get":{
        "tags":[
          "Secondary Index methods"
        ],
        "summary":"Return information about multiple secondary indexes.",
        "operationId":"indexInformation",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"namespace",
            "in":"query",
            "description":"If specified, the list of returned indices will only contain entries from this namespace.",
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified namespace not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Information about secondary indexes read successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientIndex"
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientIndex"
                  }
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Secondary Index methods"
        ],
        "summary":"Create a secondary index.",
        "operationId":"createIndex",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "$ref":"#/components/schemas/RestClientIndex"
              }
            },
            "application/msgpack":{
              "schema":{
                "$ref":"#/components/schemas/RestClientIndex"
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Index with the same name already exists, or equivalent index exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to create a secondary index has been accepted."
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid index creation parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/execute/scan/{namespace}":{
      "post":{
        "tags":[
          "Execute Operations"
        ],
        "summary":"Perform multiple operations in background scan/query.",
        "operationId":"executeScanNamespace",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record.",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record.",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Multiple operations in background scan/query run successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTask"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTask"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/execute/scan/{namespace}/{set}":{
      "post":{
        "tags":[
          "Execute Operations"
        ],
        "summary":"Perform multiple operations in background scan/query.",
        "operationId":"executeScanNamespaceSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"expiration",
            "in":"query",
            "description":"Record expiration. Also known as ttl (time to live). Seconds record will live before being removed by the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"generation",
            "in":"query",
            "description":"Expected generation. Generation is the number of times a record has been modified (including creation) on the server.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"durableDelete",
            "in":"query",
            "description":"If the transaction results in a record deletion, leave a tombstone for the record.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"respondAllOps",
            "in":"query",
            "description":"For client operate(), return a result for every operation.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"commitLevel",
            "in":"query",
            "description":"Desired consistency guarantee when committing a transaction on the server.",
            "schema":{
              "type":"string",
              "enum":[
                "COMMIT_ALL, COMMIT_MASTER"
              ]
            }
          },
          {
            "name":"generationPolicy",
            "in":"query",
            "description":"Qualify how to handle record writes based on record generation.",
            "schema":{
              "type":"string",
              "enum":[
                "NONE, EXPECT_GEN_EQUAL, EXPECT_GEN_GT"
              ]
            }
          },
          {
            "name":"recordExistsAction",
            "in":"query",
            "description":"How to handle the existence of the record. This is ignored for POST/PUT/UPDATE kvs methods.",
            "schema":{
              "type":"string",
              "enum":[
                "UPDATE, UPDATE_ONLY, REPLACE, REPLACE_ONLY, CREATE_ONLY"
              ]
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record.",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "description":"An array of operation objects specifying the operations to perform on the record.",
                "items":{
                  "$ref":"#/components/schemas/RestClientOperation"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Multiple operations in background scan/query run successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTask"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTask"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"Generation conflict.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/batch":{
      "post":{
        "tags":[
          "Batch Read Operations"
        ],
        "summary":"Return multiple records from the server in a single request.",
        "operationId":"performBatchGet",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"allowInline",
            "in":"query",
            "description":"Allow batch to be processed immediately in the server's receiving thread when the server deems it to be appropriate.  If false, the batch will always be processed in separate transaction threads.  This field is only relevant for the new batch index protocol.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"maxConcurrentThreads",
            "in":"query",
            "description":"Maximum number of concurrent synchronous batch request threads to server nodes at any point in time. If there are 16 node/namespace combinations requested and maxConcurrentThreads is 8, then batch requests will be made for 8 node/namespace combinations in parallel threads. When a request completes, a new request will be issued until all 16 requests are complete.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sendSetName",
            "in":"query",
            "description":"Send set name field to server for every key in the batch for batch index protocol.\nThis is only necessary when authentication is enabled and security roles are defined on a per set basis.",
            "schema":{
              "type":"boolean"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientBatchReadBody"
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientBatchReadBody"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Batch read completed successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientBatchReadResponse"
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientBatchReadResponse"
                  }
                }
              }
            }
          },
          "404":{
            "description":"Non existent namespace used in one or more key.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/user":{
      "get":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Return a list of information about users.",
        "operationId":"getUsers",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "403":{
            "description":"Not authorized to read user information.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Users information read successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/User"
                  }
                },
                "examples":{
                  "Users response example":{
                    "description":"Users response example",
                    "value":[
                      {
                        "name":"user1",
                        "roles":[
                          "sys-admin"
                        ],
                        "readInfo":[
                          0
                        ],
                        "writeInfo":[
                          0
                        ],
                        "connsInUse":0
                      }
                    ]
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/User"
                  }
                },
                "examples":{
                  "Users response example":{
                    "description":"Users response example",
                    "value":[
                      {
                        "name":"user1",
                        "roles":[
                          "sys-admin"
                        ],
                        "readInfo":[
                          0
                        ],
                        "writeInfo":[
                          0
                        ],
                        "connsInUse":0
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Create a new user.",
        "operationId":"createUser",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "$ref":"#/components/schemas/RestClientUserModel"
              }
            },
            "application/msgpack":{
              "schema":{
                "$ref":"#/components/schemas/RestClientUserModel"
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "409":{
            "description":"User already exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid user creation parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to create a user has been accepted."
          },
          "403":{
            "description":"Not authorized to create users.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/user/{user}/role":{
      "post":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Grant a set of roles to the specified user.",
        "operationId":"grantRoles",
        "parameters":[
          {
            "name":"user",
            "in":"path",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "List of roles request body example":{
                  "description":"List of roles request body example",
                  "value":[
                    "read-write",
                    "read-write-udf"
                  ]
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "List of roles request body example":{
                  "description":"List of roles request body example",
                  "value":[
                    "read-write",
                    "read-write-udf"
                  ]
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "403":{
            "description":"Not authorized to modify users.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified user not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to grant set of roles to a user has been accepted."
          },
          "400":{
            "description":"Invalid role parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/role":{
      "get":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Return a list of all roles registered with the Aerospike cluster.",
        "operationId":"getRoles",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Roles information read successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRole"
                  }
                }
              },
              "application/msgpack":{
                "schema":{
                  "type":"array",
                  "items":{
                    "$ref":"#/components/schemas/RestClientRole"
                  }
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to read role information.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "post":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Create a role on the Aerospike cluster.",
        "operationId":"createRole",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "$ref":"#/components/schemas/RestClientRole"
              }
            },
            "application/msgpack":{
              "schema":{
                "$ref":"#/components/schemas/RestClientRole"
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Role already exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid role creation parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to create a role has been accepted."
          },
          "403":{
            "description":"Not authorized to create roles.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/role/{name}/quota":{
      "post":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Set maximum reads/writes per second limits for a role.",
        "operationId":"setRoleQuotas",
        "parameters":[
          {
            "name":"name",
            "in":"path",
            "description":"The name of the role to which quotas will be set.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "$ref":"#/components/schemas/RestClientRoleQuota"
              }
            },
            "application/msgpack":{
              "schema":{
                "$ref":"#/components/schemas/RestClientRoleQuota"
              }
            }
          },
          "required":true
        },
        "responses":{
          "409":{
            "description":"Role already exists.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to modify a role has been accepted."
          },
          "400":{
            "description":"Invalid role creation parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to create roles.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/role/{name}/privilege":{
      "post":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Grant a list of privileges to a specific role.",
        "operationId":"grantPrivileges",
        "parameters":[
          {
            "name":"name",
            "in":"path",
            "description":"The name of the role to which privileges will be granted.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientPrivilege"
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientPrivilege"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to modify a role has been accepted."
          },
          "403":{
            "description":"Not authorized to modify roles.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid privilege parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified role not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/user/{user}":{
      "get":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Return information about a specific user.",
        "operationId":"getUser",
        "parameters":[
          {
            "name":"user",
            "in":"path",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "404":{
            "description":"Specified user not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to read user information.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"User information read successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "User response example":{
                    "description":"User response example",
                    "value":{
                      "name":"user1",
                      "roles":[
                        "sys-admin"
                      ],
                      "readInfo":[
                        0
                      ],
                      "writeInfo":[
                        0
                      ],
                      "connsInUse":0
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "User response example":{
                    "description":"User response example",
                    "value":{
                      "name":"user1",
                      "roles":[
                        "sys-admin"
                      ],
                      "readInfo":[
                        0
                      ],
                      "writeInfo":[
                        0
                      ],
                      "connsInUse":0
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Remove a user.",
        "operationId":"dropUser",
        "parameters":[
          {
            "name":"user",
            "in":"path",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "404":{
            "description":"Specified user not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to delete a user has been accepted."
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to delete users.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "patch":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Change the password of the specified user.",
        "operationId":"changePassword",
        "parameters":[
          {
            "name":"user",
            "in":"path",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"string"
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"string"
              }
            }
          },
          "required":true
        },
        "responses":{
          "403":{
            "description":"Not authorized to modify users.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified user not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to change user's password has been accepted."
          }
        }
      }
    },
    "/v1/admin/user/{user}/role/delete":{
      "patch":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Revoke a set of roles from the specified user.",
        "operationId":"revokeRoles",
        "parameters":[
          {
            "name":"user",
            "in":"path",
            "description":"The user from which to revoke roles",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "List of roles request body example":{
                  "description":"List of roles request body example",
                  "value":[
                    "read-write",
                    "read-write-udf"
                  ]
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "type":"string"
                }
              },
              "examples":{
                "List of roles request body example":{
                  "description":"List of roles request body example",
                  "value":[
                    "read-write",
                    "read-write-udf"
                  ]
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "403":{
            "description":"Not authorized to modify users.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified user not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to revoke set of roles from a user has been accepted."
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid role parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/role/{name}/privilege/delete":{
      "patch":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Remove a list of privileges from a specific role.",
        "operationId":"revokePrivileges",
        "parameters":[
          {
            "name":"name",
            "in":"path",
            "description":"The name of the role from which privileges will be removed.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "requestBody":{
          "content":{
            "application/json":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientPrivilege"
                }
              }
            },
            "application/msgpack":{
              "schema":{
                "type":"array",
                "items":{
                  "$ref":"#/components/schemas/RestClientPrivilege"
                }
              }
            }
          },
          "required":true
        },
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to modify a role has been accepted."
          },
          "403":{
            "description":"Not authorized to modify roles.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid privilege parameters.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified role not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/scan/{namespace}":{
      "get":{
        "tags":[
          "Scan Operations"
        ],
        "summary":"Return multiple records from the server in a scan request.",
        "operationId":"performScan",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"maxRecords",
            "in":"query",
            "description":"Number of records to return.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"recordsPerSecond",
            "in":"query",
            "description":"Limit returned records per second (rps) rate for each server.\nDo not apply rps limit if recordsPerSecond is zero.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxConcurrentNodes",
            "in":"query",
            "description":"Maximum number of concurrent requests to server nodes at any point in time. If there are 16 nodes in the cluster and maxConcurrentNodes is 8, then scan requests will be made to 8 nodes in parallel.  When a scan completes, a new scan request will be issued until all 16 nodes have been scanned.\nThis field is only relevant when concurrentNodes is true.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"concurrentNodes",
            "in":"query",
            "description":"Should scan requests be issued in parallel.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"includeBinData",
            "in":"query",
            "description":"Should bin data be retrieved. If false, only record digests (and user keys if stored on the server) are retrieved.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"from",
            "in":"query",
            "description":"Next page token parameter.",
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Scan multiple records successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientScanResponse"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientScanResponse"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/scan/{namespace}/{set}":{
      "get":{
        "tags":[
          "Scan Operations"
        ],
        "summary":"Return multiple records from the server in a scan request.",
        "operationId":"performScan_1",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"Namespace for the record; equivalent to database name.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"Set for the record; equivalent to database table.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"sendKey",
            "in":"query",
            "description":"Send user defined key in addition to hash digest on both reads and writes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"replica",
            "in":"query",
            "description":"Replica algorithm used to determine the target node for a single record command.",
            "schema":{
              "type":"string",
              "enum":[
                "MASTER, MASTER_PROLES, SEQUENCE, RANDOM"
              ]
            }
          },
          {
            "name":"keytype",
            "in":"query",
            "description":"The Type of the userKey.",
            "schema":{
              "type":"string",
              "enum":[
                "STRING, INTEGER, BYTES, DIGEST"
              ]
            }
          },
          {
            "name":"recordBins",
            "in":"query",
            "description":"Optionally specify a set of bins to return when fetching a record. If omitted, all bins will be returned.",
            "schema":{
              "type":"array",
              "items":{
                "type":"string"
              }
            }
          },
          {
            "name":"readModeSC",
            "in":"query",
            "description":"Read policy for SC (strong consistency) namespaces. Determines SC read consistency options.",
            "schema":{
              "type":"string",
              "enum":[
                "ALLOW_REPLICA, ALLOW_UNAVAILABLE, LINEARIZE, SESSION"
              ]
            }
          },
          {
            "name":"readModeAP",
            "in":"query",
            "description":"Read policy for AP (availability) namespaces. How duplicates should be consulted in a read operation. Only makes a difference during migrations and only applicable in AP mode.",
            "schema":{
              "type":"string",
              "enum":[
                "ALL, ONE"
              ]
            }
          },
          {
            "name":"totalTimeout",
            "in":"query",
            "description":"Total transaction timeout in milliseconds.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"socketTimeout",
            "in":"query",
            "description":"Socket idle timeout in milliseconds when processing a database command.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"sleepBetweenRetries",
            "in":"query",
            "description":"Milliseconds to sleep between retries.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxRetries",
            "in":"query",
            "description":"Maximum number of retries before aborting the current transaction.\nThe initial attempt is not counted as a retry.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"predexp",
            "in":"query",
            "description":"Optional Predicate Expression filter (obsolete as of Aerospike Database 5.2.0) in infix notation DSL. If the Predicate Expression exists and evaluates to false, the transaction is ignored.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"filterexp",
            "in":"query",
            "description":"Optional Filter Expression (introduced in Aerospike Database 5.2.0) in infix notation DSL.",
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"compress",
            "in":"query",
            "description":"Use zlib compression on command buffers sent to the server and responses received from the server when the buffer size is greater than 128 bytes.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"maxRecords",
            "in":"query",
            "description":"Number of records to return.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"recordsPerSecond",
            "in":"query",
            "description":"Limit returned records per second (rps) rate for each server.\nDo not apply rps limit if recordsPerSecond is zero.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"maxConcurrentNodes",
            "in":"query",
            "description":"Maximum number of concurrent requests to server nodes at any point in time. If there are 16 nodes in the cluster and maxConcurrentNodes is 8, then scan requests will be made to 8 nodes in parallel.  When a scan completes, a new scan request will be issued until all 16 nodes have been scanned.\nThis field is only relevant when concurrentNodes is true.",
            "schema":{
              "type":"integer"
            }
          },
          {
            "name":"concurrentNodes",
            "in":"query",
            "description":"Should scan requests be issued in parallel.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"includeBinData",
            "in":"query",
            "description":"Should bin data be retrieved. If false, only record digests (and user keys if stored on the server) are retrieved.",
            "schema":{
              "type":"boolean"
            }
          },
          {
            "name":"from",
            "in":"query",
            "description":"Next page token parameter.",
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "404":{
            "description":"Namespace or set does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Scan multiple records successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientScanResponse"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientScanResponse"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/index/{namespace}/{name}":{
      "get":{
        "tags":[
          "Secondary Index methods"
        ],
        "summary":"Get Information about a single secondary index.",
        "operationId":"getIndexStats",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"The namespace containing the index",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"name",
            "in":"path",
            "description":"The name of the index",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified Index does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Information about secondary index read successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Secondary index response example":{
                    "description":"Secondary index response example",
                    "value":{
                      "loadtime":0,
                      "delete_success":0,
                      "keys":0,
                      "nbtr_memory_used":0,
                      "delete_error":0,
                      "load_pct":100,
                      "stat_gc_recs":0,
                      "query_basic_abort":0,
                      "histogram":false,
                      "entries":0,
                      "query_basic_error":0,
                      "query_basic_complete":0,
                      "ibtr_memory_used":18432,
                      "write_error":0,
                      "query_basic_avg_rec_count":0,
                      "write_success":0
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Secondary index response example":{
                    "description":"Secondary index response example",
                    "value":{
                      "loadtime":0,
                      "delete_success":0,
                      "keys":0,
                      "nbtr_memory_used":0,
                      "delete_error":0,
                      "load_pct":100,
                      "stat_gc_recs":0,
                      "query_basic_abort":0,
                      "histogram":false,
                      "entries":0,
                      "query_basic_error":0,
                      "query_basic_complete":0,
                      "ibtr_memory_used":18432,
                      "write_error":0,
                      "query_basic_avg_rec_count":0,
                      "write_success":0
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete":{
        "tags":[
          "Secondary Index methods"
        ],
        "summary":"Remove a secondary Index",
        "operationId":"dropIndex",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"The namespace containing the index",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"name",
            "in":"path",
            "description":"The name of the index",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified Index does not exist.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to remove a secondary index has been accepted."
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/execute/scan/status/{taskId}":{
      "get":{
        "tags":[
          "Execute Operations"
        ],
        "description":"Get status of background scan by task id.",
        "operationId":"executeScanStatus",
        "parameters":[
          {
            "name":"taskId",
            "in":"path",
            "description":"Background scan task id.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Status of background scan read successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTaskStatus"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientExecuteTaskStatus"
                }
              }
            }
          }
        }
      }
    },
    "/v1/cluster":{
      "get":{
        "tags":[
          "Cluster information operations"
        ],
        "summary":"Return an object containing information about the Aerospike cluster.",
        "operationId":"getClusterInfo",
        "parameters":[
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Cluster information read successfully.",
            "content":{
              "application/json":{
                "examples":{
                  "Cluster info response example":{
                    "description":"Cluster info response example",
                    "value":{
                      "nodes":[
                        {
                          "name":"BB9020011AC4202"
                        }
                      ],
                      "namespaces":[
                        {
                          "sets":[
                            {
                              "objectCount":1,
                              "name":"junit"
                            },
                            {
                              "objectCount":0,
                              "name":"msgpack"
                            },
                            {
                              "objectCount":0,
                              "name":"executeSet"
                            },
                            {
                              "objectCount":0,
                              "name":"scanSet"
                            },
                            {
                              "objectCount":0,
                              "name":"auth"
                            },
                            {
                              "objectCount":0,
                              "name":"idxDemo"
                            },
                            {
                              "objectCount":0,
                              "name":"truncate"
                            },
                            {
                              "objectCount":0,
                              "name":"otherset"
                            }
                          ],
                          "name":"test"
                        }
                      ]
                    }
                  }
                }
              },
              "application/msgpack":{
                "examples":{
                  "Cluster info response example":{
                    "description":"Cluster info response example",
                    "value":{
                      "nodes":[
                        {
                          "name":"BB9020011AC4202"
                        }
                      ],
                      "namespaces":[
                        {
                          "sets":[
                            {
                              "objectCount":1,
                              "name":"junit"
                            },
                            {
                              "objectCount":0,
                              "name":"msgpack"
                            },
                            {
                              "objectCount":0,
                              "name":"executeSet"
                            },
                            {
                              "objectCount":0,
                              "name":"scanSet"
                            },
                            {
                              "objectCount":0,
                              "name":"auth"
                            },
                            {
                              "objectCount":0,
                              "name":"idxDemo"
                            },
                            {
                              "objectCount":0,
                              "name":"truncate"
                            },
                            {
                              "objectCount":0,
                              "name":"otherset"
                            }
                          ],
                          "name":"test"
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/role/{name}":{
      "get":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Get information about a specific role.",
        "operationId":"getRole",
        "parameters":[
          {
            "name":"name",
            "in":"path",
            "description":"The name of the role whose information should be retrieved.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "200":{
            "description":"Role read successfully.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRole"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientRole"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to read role information.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified role not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      },
      "delete":{
        "tags":[
          "Admin Operations"
        ],
        "summary":"Remove a specific role from the Aerospike cluster.",
        "operationId":"dropRole",
        "parameters":[
          {
            "name":"name",
            "in":"path",
            "description":"The name of the role to remove.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "404":{
            "description":"Specified role not found.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to remove a role has been accepted."
          },
          "403":{
            "description":"Not authorized to remove roles.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/truncate/{namespace}":{
      "delete":{
        "tags":[
          "Truncate Operations"
        ],
        "summary":"Truncate records in a specified namespace.",
        "operationId":"truncateNamespace",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"The namespace whose records will be truncated.",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"date",
            "in":"query",
            "description":"All records last updated before this date/time will be truncated. If not specified, all records will be truncated.\n This is a string representation of a date time utilizing the ISO-8601 extended offset date-time format. example: 2019-12-03T10:15:30+01:00",
            "required":false,
            "schema":{
              "type":"string"
            },
            "example":"2019-12-03T10:15:30+01:00"
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to truncate record has been accepted."
          }
        }
      }
    },
    "/v1/truncate/{namespace}/{set}":{
      "delete":{
        "tags":[
          "Truncate Operations"
        ],
        "summary":"Truncate records in a specified namespace and set.",
        "operationId":"truncateSet",
        "parameters":[
          {
            "name":"namespace",
            "in":"path",
            "description":"The namespace whose records will be truncated",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"set",
            "in":"path",
            "description":"The set, in the specified namespace, whose records will be truncated",
            "required":true,
            "schema":{
              "type":"string"
            }
          },
          {
            "name":"date",
            "in":"query",
            "description":"All records last updated before this date/time will be truncated. If not specified, all records will be truncated.\n This is a string representation of a date time utilizing the ISO-8601 extended offset date-time format. example: 2019-12-03T10:15:30+01:00",
            "required":false,
            "schema":{
              "type":"string"
            },
            "example":"2019-12-03T10:15:30+01:00"
          },
          {
            "name":"Authorization",
            "in":"header",
            "required":false,
            "schema":{
              "type":"string"
            }
          }
        ],
        "responses":{
          "500":{
            "description":"REST Client encountered an error while processing the request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "400":{
            "description":"Invalid parameters or request.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "403":{
            "description":"Not authorized to access the resource.",
            "content":{
              "application/json":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              },
              "application/msgpack":{
                "schema":{
                  "$ref":"#/components/schemas/RestClientError"
                }
              }
            }
          },
          "202":{
            "description":"Request to truncate record has been accepted."
          }
        }
      }
    }
  },
  "components":{
    "schemas":{
      "RestClientError":{
        "required":[
          "inDoubt"
        ],
        "type":"object",
        "properties":{
          "message":{
            "type":"string",
            "description":"A message describing the cause of the error.",
            "example":"Error Message"
          },
          "inDoubt":{
            "type":"boolean",
            "description":"A boolean specifying whether it was possible that the operation succeeded. This is only included if true.",
            "example":false
          },
          "internalErrorCode":{
            "type":"integer",
            "description":"An internal error code for diagnostic purposes. This may be null",
            "format":"int32",
            "example":-3
          }
        }
      },
      "RestClientOperation":{
        "required":[
          "opValues",
          "operation"
        ],
        "type":"object",
        "properties":{
          "operation":{
            "type":"string",
            "description":"Aerospike operation to perform on the record",
            "example":"LIST_APPEND_ITEMS",
            "enum":[
              "ADD",
              "APPEND",
              "GET",
              "PREPEND",
              "READ",
              "GET_HEADER",
              "TOUCH",
              "PUT",
              "DELETE",
              "LIST_APPEND",
              "LIST_APPEND_ITEMS",
              "LIST_CLEAR",
              "LIST_GET",
              "LIST_GET_BY_INDEX",
              "LIST_GET_BY_INDEX_RANGE",
              "LIST_GET_BY_RANK",
              "LIST_GET_BY_RANK_RANGE",
              "LIST_GET_BY_VALUE_REL_RANK_RANGE",
              "LIST_GET_BY_VALUE",
              "LIST_GET_BY_VALUE_RANGE",
              "LIST_GET_BY_VALUE_LIST",
              "LIST_GET_RANGE",
              "LIST_INCREMENT",
              "LIST_INSERT",
              "LIST_INSERT_ITEMS",
              "LIST_POP",
              "LIST_POP_RANGE",
              "LIST_REMOVE",
              "LIST_REMOVE_BY_INDEX",
              "LIST_REMOVE_BY_INDEX_RANGE",
              "LIST_REMOVE_BY_RANK",
              "LIST_REMOVE_BY_RANK_RANGE",
              "LIST_REMOVE_BY_VALUE_REL_RANK_RANGE",
              "LIST_REMOVE_BY_VALUE",
              "LIST_REMOVE_BY_VALUE_RANGE",
              "LIST_REMOVE_BY_VALUE_LIST",
              "LIST_REMOVE_RANGE",
              "LIST_SET",
              "LIST_SET_ORDER",
              "LIST_SIZE",
              "LIST_SORT",
              "LIST_TRIM",
              "LIST_CREATE",
              "MAP_CLEAR",
              "MAP_DECREMENT",
              "MAP_GET_BY_INDEX",
              "MAP_GET_BY_INDEX_RANGE",
              "MAP_GET_BY_KEY",
              "MAP_GET_BY_KEY_LIST",
              "MAP_GET_BY_KEY_RANGE",
              "MAP_GET_BY_RANK",
              "MAP_GET_BY_RANK_RANGE",
              "MAP_GET_BY_VALUE",
              "MAP_GET_BY_VALUE_RANGE",
              "MAP_GET_BY_VALUE_LIST",
              "MAP_GET_BY_KEY_REL_INDEX_RANGE",
              "MAP_GET_BY_VALUE_REL_RANK_RANGE",
              "MAP_INCREMENT",
              "MAP_PUT",
              "MAP_PUT_ITEMS",
              "MAP_REMOVE_BY_INDEX",
              "MAP_REMOVE_BY_INDEX_RANGE",
              "MAP_REMOVE_BY_KEY",
              "MAP_REMOVE_BY_KEY_RANGE",
              "MAP_REMOVE_BY_RANK",
              "MAP_REMOVE_BY_RANK_RANGE",
              "MAP_REMOVE_BY_KEY_REL_INDEX_RANGE",
              "MAP_REMOVE_BY_VALUE_REL_RANK_RANGE",
              "MAP_REMOVE_BY_VALUE",
              "MAP_REMOVE_BY_VALUE_RANGE",
              "MAP_REMOVE_BY_VALUE_LIST",
              "MAP_SET_MAP_POLICY",
              "MAP_SIZE",
              "MAP_CREATE",
              "BIT_RESIZE",
              "BIT_INSERT",
              "BIT_REMOVE",
              "BIT_SET",
              "BIT_OR",
              "BIT_XOR",
              "BIT_AND",
              "BIT_NOT",
              "BIT_LSHIFT",
              "BIT_RSHIFT",
              "BIT_ADD",
              "BIT_SUBTRACT",
              "BIT_SET_INT",
              "BIT_GET",
              "BIT_COUNT",
              "BIT_LSCAN",
              "BIT_RSCAN",
              "BIT_GET_INT",
              "HLL_INIT",
              "HLL_ADD",
              "HLL_SET_UNION",
              "HLL_SET_COUNT",
              "HLL_FOLD",
              "HLL_COUNT",
              "HLL_UNION",
              "HLL_UNION_COUNT",
              "HLL_INTERSECT_COUNT",
              "HLL_SIMILARITY",
              "HLL_DESCRIBE"
            ]
          },
          "opValues":{
            "type":"object",
            "additionalProperties":{
              "type":"object",
              "example":{
                "bin":"listbin",
                "values":[
                  1,
                  2,
                  3
                ]
              }
            },
            "example":{
              "bin":"listbin",
              "values":[
                1,
                2,
                3
              ]
            }
          }
        }
      },
      "RestClientRecord":{
        "type":"object",
        "properties":{
          "generation":{
            "type":"integer",
            "description":"The generation of the record.",
            "format":"int32",
            "example":2
          },
          "ttl":{
            "type":"integer",
            "description":"The time to live for the record, in seconds from now.",
            "format":"int32",
            "example":1000
          },
          "bins":{
            "type":"object",
            "additionalProperties":{
              "type":"object",
              "description":"A mapping from binName to binValue",
              "example":{
                "bin1":"val1",
                "pi":"3.14"
              }
            },
            "description":"A mapping from binName to binValue",
            "example":{
              "bin1":"val1",
              "pi":"3.14"
            }
          }
        },
        "description":"Record associated with the key. Null if the record was not found"
      },
      "RestClientIndex":{
        "type":"object",
        "properties":{
          "namespace":{
            "type":"string",
            "example":"testNS"
          },
          "set":{
            "type":"string",
            "example":"testSet"
          },
          "bin":{
            "type":"string",
            "description":"The bin which is indexed",
            "example":"ageBin"
          },
          "name":{
            "type":"string",
            "description":"The name of the index. This must be unique per set",
            "example":"ageIndex"
          },
          "type":{
            "type":"string",
            "enum":[
              "NUMERIC",
              "STRING",
              "GEO2DSPHERE"
            ]
          },
          "collection_type":{
            "type":"string",
            "enum":[
              "DEFAULT",
              "LIST",
              "MAPKEYS",
              "MAPVALUES"
            ]
          }
        }
      },
      "RestClientExecuteTask":{
        "type":"object",
        "properties":{
          "taskId":{
            "type":"integer",
            "description":"The task ID value.",
            "format":"int64"
          },
          "scan":{
            "type":"boolean",
            "description":"The scan indicator."
          }
        }
      },
      "RestClientBatchReadBody":{
        "required":[
          "key"
        ],
        "type":"object",
        "properties":{
          "key":{
            "$ref":"#/components/schemas/RestClientKey"
          },
          "readAllBins":{
            "type":"boolean",
            "description":"Whether all bins should be returned with this record."
          },
          "binNames":{
            "type":"array",
            "description":"List of bins to limit the record response to.",
            "example":[
              "bin1"
            ],
            "items":{
              "type":"string",
              "description":"List of bins to limit the record response to.",
              "example":"[\"bin1\"]"
            }
          }
        }
      },
      "RestClientKey":{
        "required":[
          "namespace",
          "userKey"
        ],
        "type":"object",
        "properties":{
          "namespace":{
            "type":"string",
            "example":"testNS"
          },
          "userKey":{
            "type":"object",
            "description":"The user key, it may be a string, integer, or URL safe Base64 encoded bytes.",
            "example":"userKey"
          },
          "setName":{
            "type":"string",
            "example":"testSet"
          },
          "keytype":{
            "type":"string",
            "description":"Enum describing the type of the userKey. This field is omitted in MessagePack responses.",
            "example":"STRING",
            "enum":[
              "STRING",
              "INTEGER",
              "BYTES",
              "DIGEST"
            ]
          }
        },
        "description":"Key to retrieve a record"
      },
      "RestClientBatchReadResponse":{
        "type":"object",
        "properties":{
          "record":{
            "$ref":"#/components/schemas/RestClientRecord"
          },
          "key":{
            "$ref":"#/components/schemas/RestClientKey"
          },
          "readAllBins":{
            "type":"boolean",
            "description":"Whether all bins should be returned with this record"
          },
          "binNames":{
            "type":"array",
            "description":"List of bins to limit the record response to.",
            "example":[
              "bin1"
            ],
            "items":{
              "type":"string",
              "description":"List of bins to limit the record response to.",
              "example":"[\"bin1\"]"
            }
          }
        }
      },
      "RestClientUserModel":{
        "required":[
          "password",
          "roles",
          "username"
        ],
        "type":"object",
        "properties":{
          "username":{
            "type":"string"
          },
          "password":{
            "type":"string"
          },
          "roles":{
            "type":"array",
            "items":{
              "type":"string"
            }
          }
        }
      },
      "RestClientPrivilege":{
        "required":[
          "code"
        ],
        "type":"object",
        "properties":{
          "code":{
            "type":"string",
            "enum":[
              "user-admin",
              "sys-admin",
              "data-admin",
              "read",
              "read-write",
              "read-write-udf",
              "write"
            ]
          },
          "namespace":{
            "type":"string",
            "description":"Namespace Scope",
            "example":"testNS"
          },
          "set":{
            "type":"string",
            "description":"setName Scope",
            "example":"testSet"
          }
        },
        "description":"List of assigned privileges."
      },
      "RestClientRole":{
        "required":[
          "name",
          "privileges"
        ],
        "type":"object",
        "properties":{
          "name":{
            "type":"string",
            "description":"Role name.",
            "example":"customRole"
          },
          "privileges":{
            "type":"array",
            "description":"List of assigned privileges.",
            "items":{
              "$ref":"#/components/schemas/RestClientPrivilege"
            }
          },
          "whitelist":{
            "type":"array",
            "description":"List of allowable IP addresses.",
            "items":{
              "type":"string",
              "description":"List of allowable IP addresses."
            }
          },
          "readQuota":{
            "type":"integer",
            "description":"Maximum reads per second limit.",
            "format":"int32"
          },
          "writeQuota":{
            "type":"integer",
            "description":"Maximum writes per second limit.",
            "format":"int32"
          }
        }
      },
      "RestClientRoleQuota":{
        "type":"object",
        "properties":{
          "readQuota":{
            "type":"integer",
            "description":"Maximum reads per second limit.",
            "format":"int32"
          },
          "writeQuota":{
            "type":"integer",
            "description":"Maximum writes per second limit.",
            "format":"int32"
          }
        }
      },
      "Pagination":{
        "type":"object",
        "properties":{
          "nextToken":{
            "type":"string",
            "description":"The next page token."
          },
          "totalRecords":{
            "type":"integer",
            "description":"The total number of records in page.",
            "format":"int64"
          }
        },
        "description":"Pagination details."
      },
      "RestClientScanResponse":{
        "type":"object",
        "properties":{
          "records":{
            "type":"array",
            "description":"List of records for current page.",
            "items":{
              "$ref":"#/components/schemas/RestClientRecord"
            }
          },
          "pagination":{
            "$ref":"#/components/schemas/Pagination"
          }
        }
      },
      "RestClientExecuteTaskStatus":{
        "type":"object",
        "properties":{
          "task":{
            "$ref":"#/components/schemas/RestClientExecuteTask"
          },
          "status":{
            "type":"string",
            "description":"The ExecuteTask status."
          }
        }
      },
      "User":{
        "type":"object",
        "properties":{
          "name":{
            "type":"string"
          },
          "roles":{
            "type":"array",
            "items":{
              "type":"string"
            }
          },
          "readInfo":{
            "type":"array",
            "items":{
              "type":"integer",
              "format":"int32"
            }
          },
          "writeInfo":{
            "type":"array",
            "items":{
              "type":"integer",
              "format":"int32"
            }
          },
          "connsInUse":{
            "type":"integer",
            "format":"int32"
          }
        }
      }
    }
  }
}