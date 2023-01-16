{
    "openapi": "3.0.1",
        "info": {
        "title": "API - Elaboração prova",
            "version": "v1"
    },
    "paths": {
        "/api/Alternativas": {
            "post": {
                "tags": [
                    "Alternativas"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAlternativaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAlternativaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAlternativaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Alternativas"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Alternativas/{id}": {
            "put": {
                "tags": [
                    "Alternativas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAlternativaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAlternativaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAlternativaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Alternativas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Alternativas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Alternativas/item/{itemId}": {
            "get": {
                "tags": [
                    "Alternativas"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AnoEscolar": {
            "post": {
                "tags": [
                    "AnoEscolar"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAnoEscolarRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAnoEscolarRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAnoEscolarRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "AnoEscolar"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AnoEscolar/{id}": {
            "put": {
                "tags": [
                    "AnoEscolar"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAnoEscolarRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAnoEscolarRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAnoEscolarRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "AnoEscolar"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "AnoEscolar"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEncomenda": {
            "post": {
                "tags": [
                    "AreaEncomenda"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "AreaEncomenda"
                ],
                    "parameters": [
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEncomenda/{encomendaId}": {
            "get": {
                "tags": [
                    "AreaEncomenda"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEncomenda/obtemTodosPorUsuario/{encomendaId}": {
            "get": {
                "tags": [
                    "AreaEncomenda"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEncomenda/Disponiveis/{encomendaId}": {
            "get": {
                "tags": [
                    "AreaEncomenda"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEvento": {
            "post": {
                "tags": [
                    "AreaEvento"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "AreaEvento"
                ],
                    "parameters": [
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEvento/{eventoId}": {
            "get": {
                "tags": [
                    "AreaEvento"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEvento/obtemTodosPorUsuario/{eventoId}": {
            "get": {
                "tags": [
                    "AreaEvento"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/AreaEvento/Disponiveis/{eventoId}": {
            "get": {
                "tags": [
                    "AreaEvento"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Areas": {
            "post": {
                "tags": [
                    "Areas"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirAreaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Areas"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Areas/{id}": {
            "put": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAreaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAreaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarAreaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Areas/AreasNaoAssociadasAoParticipanteEvento/{eventoId}/{usuarioId}/{papelId}": {
            "get": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "papelId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Areas/AreasNaoAssociadasAoParticipanteEncomenda/{encomendaId}/{usuarioId}/{papelId}": {
            "get": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "papelId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Areas/AreasDoParticipante/{eventoId}": {
            "get": {
                "tags": [
                    "Areas"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Armazenamento/Imagem/{id}": {
            "get": {
                "tags": [
                    "Armazenamento"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Armazenamento/UploadArquivoFromItem": {
            "post": {
                "tags": [
                    "Armazenamento"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "EncomendaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "ItemId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "CapaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "File": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "MetaDado": {
                                        "type": "string",
                                            "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "EncomendaId": {
                                    "style": "form"
                                },
                                "ItemId": {
                                    "style": "form"
                                },
                                "CapaId": {
                                    "style": "form"
                                },
                                "File": {
                                    "style": "form"
                                },
                                "MetaDado": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Armazenamento/UploadArquivoFromCapa": {
            "post": {
                "tags": [
                    "Armazenamento"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "EncomendaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "ItemId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "CapaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "File": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "MetaDado": {
                                        "type": "string",
                                            "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "EncomendaId": {
                                    "style": "form"
                                },
                                "ItemId": {
                                    "style": "form"
                                },
                                "CapaId": {
                                    "style": "form"
                                },
                                "File": {
                                    "style": "form"
                                },
                                "MetaDado": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Armazenamento/ObterTiposConteudo": {
            "get": {
                "tags": [
                    "Armazenamento"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "EncomendaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "ItemId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "CapaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "File": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "MetaDado": {
                                        "type": "string",
                                            "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "EncomendaId": {
                                    "style": "form"
                                },
                                "ItemId": {
                                    "style": "form"
                                },
                                "CapaId": {
                                    "style": "form"
                                },
                                "File": {
                                    "style": "form"
                                },
                                "MetaDado": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirBlocoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirBlocoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirBlocoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/{id}": {
            "put": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarBlocoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarBlocoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarBlocoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/excluirBlocosEmLote": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirBlocosEmLoteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirBlocosEmLoteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirBlocosEmLoteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/paginados": {
            "get": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "cadernoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "descricao",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/adicionarItemNoBloco": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItemNoBlocoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItemNoBlocoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItemNoBlocoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/adicionarItensNoBlocoEmLote": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItensNoBlocoEmLoteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItensNoBlocoEmLoteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarItensNoBlocoEmLoteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/removerItemNoBloco": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverItemNoBlocoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverItemNoBlocoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverItemNoBlocoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/atualizaBlocoItemPosicao": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/BlocoItem"
                                },
                                "nullable": true
                            }
                        },
                        "text/json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/BlocoItem"
                                },
                                "nullable": true
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/BlocoItem"
                                },
                                "nullable": true
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/exportar": {
            "post": {
                "tags": [
                    "Blocos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarBlocosRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarBlocosRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarBlocosRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/blocosImportados/{eventoId}": {
            "get": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Blocos/possuiItensNaoConcluidos/{eventoId}/{blocoId}": {
            "get": {
                "tags": [
                    "Blocos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "blocoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/{id}": {
            "put": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/excluirCadernosEmLote": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirCadernosEmLoteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirCadernosEmLoteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirCadernosEmLoteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/paginados": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/visualizar/{id}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/impressao/{id}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/concluir": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/retornarParaEdicao": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarStatusCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/adicionarBlocoNoCaderno": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarBlocoNoCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarBlocoNoCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarBlocoNoCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/SelecionarCapa": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SelecionarCapaProvaParaCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SelecionarCapaProvaParaCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/SelecionarCapaProvaParaCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/removerBlocoDoCaderno": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverBlocoDoCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverBlocoDoCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverBlocoDoCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/exportarCadernoValidar/{cadernoId}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/exportarCaderno/{cadernoId}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/exportarCadernoBase64/{cadernoId}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/exportarCadernoHtml": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoHtmlRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoHtmlRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoHtmlRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/exportarCadernoCsv": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoCsvRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoCsvRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarCadernoCsvRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/atualizaCadernoBlocoPosicao": {
            "post": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "recalcularPosicaoInicialDosBlocos",
                            "in": "query",
                            "schema": {
                                "type": "boolean"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/CadernoBloco"
                                },
                                "nullable": true
                            }
                        },
                        "text/json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/CadernoBloco"
                                },
                                "nullable": true
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "type": "array",
                                    "items": {
                                    "$ref": "#/components/schemas/CadernoBloco"
                                },
                                "nullable": true
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/cadernosImportados/{eventoId}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Cadernos/possuiItensNaoConcluidos/{eventoId}/{cadernoId}": {
            "get": {
                "tags": [
                    "Cadernos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CadernoStatus": {
            "get": {
                "tags": [
                    "CadernoStatus"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/gerar-capa-prova": {
            "post": {
                "tags": [
                    "CapaProva"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/gerar-conteudo": {
            "post": {
                "tags": [
                    "CapaProva"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/GeararCapaProvaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva": {
            "post": {
                "tags": [
                    "CapaProva"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaProvaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaProvaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaProvaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "CapaProva"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/clonar/{id}": {
            "post": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/{id}": {
            "put": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/Evento/{eventoId}": {
            "get": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "template",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaProva/Visualizar/{eventoId}": {
            "post": {
                "tags": [
                    "CapaProva"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaProvaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag": {
            "post": {
                "tags": [
                    "CapaTag"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/{id}": {
            "put": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValor": {
            "post": {
                "tags": [
                    "CapaTag"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValor/{id}": {
            "put": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagValorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagValorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarCapaTagValorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValor/obtemPorTodos": {
            "get": {
                "tags": [
                    "CapaTag"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValorCaderno": {
            "post": {
                "tags": [
                    "CapaTag"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorCadernoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorCadernoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirCapaTagValorCadernoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValorCaderno/{capaTagValorId}/{cadernoId}": {
            "delete": {
                "tags": [
                    "CapaTag"
                ],
                    "parameters": [
                        {
                            "name": "capaTagValorId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/CapaTag/capaTagValorCaderno/obtemPorTodos": {
            "get": {
                "tags": [
                    "CapaTag"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Comites": {
            "post": {
                "tags": [
                    "Comites"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirComiteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirComiteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirComiteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Comites/Adicionar-usuario": {
            "post": {
                "tags": [
                    "Comites"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarUsuarioComiteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarUsuarioComiteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AdicionarUsuarioComiteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Comites/Remover-usuario": {
            "post": {
                "tags": [
                    "Comites"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverUsuarioComiteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverUsuarioComiteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RemoverUsuarioComiteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Comites/{id}": {
            "get": {
                "tags": [
                    "Comites"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ConfiguracaoModulo": {
            "post": {
                "tags": [
                    "ConfiguracaoModulo"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "put": {
                "tags": [
                    "ConfiguracaoModulo"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarConfiguracaoModuloRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ConfiguracaoModulo/evento/{eventoId}": {
            "get": {
                "tags": [
                    "ConfiguracaoModulo"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ConfiguracaoModulo/encomenda/{encomendaId}": {
            "get": {
                "tags": [
                    "ConfiguracaoModulo"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor": {
            "post": {
                "tags": [
                    "Descritor"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDescritorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDescritorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDescritorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "matrizId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/{id}": {
            "put": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDescritorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDescritorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDescritorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/obtemPorMatrizId/{id}": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/filhos/{id}": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/estaSendoUtilizado/{id}": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/arvore": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "matrizId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/todos": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "matrizId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigoOrigem",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "nome",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Descritor/todos/folhas": {
            "get": {
                "tags": [
                    "Descritor"
                ],
                    "parameters": [
                        {
                            "name": "matrizId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/DistribuicaoPedidoDescritores": {
            "post": {
                "tags": [
                    "DistribuicaoPedidoDescritores"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoDescritorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoDescritorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoDescritorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "DistribuicaoPedidoDescritores"
                ],
                    "parameters": [
                        {
                            "name": "distribuicaoPedidoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/DistribuicaoPedidos": {
            "post": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirDistribuicaoPedidoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/DistribuicaoPedidos/{id}": {
            "put": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDistribuicaoPedidoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDistribuicaoPedidoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarDistribuicaoPedidoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/DistribuicaoPedidos/paginados": {
            "get": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "itemTipoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/DistribuicaoPedidos/distribuicaoPorProfessor/{encomendaId}/{usuarioId}": {
            "get": {
                "tags": [
                    "DistribuicaoPedidos"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ElmahErrors": {
            "get": {
                "tags": [
                    "ElmahErrors"
                ],
                    "parameters": [
                        {
                            "name": "errorId",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 150
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda": {
            "post": {
                "tags": [
                    "Encomenda"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda/{id}": {
            "put": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda/totalPorUsuario": {
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda/itens/sumario": {
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda/relatorios/itensElaborador/{id}": {
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Encomenda/relatorios/itensElaborador/{id}/csv": {
            "get": {
                "tags": [
                    "Encomenda"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios": {
            "post": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEncomendaUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/IncluirElaboradorEncomenda": {
            "post": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/IncluirElaboradorEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/IncluirElaboradorEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/IncluirElaboradorEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/{id}": {
            "delete": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/Encomenda/{encomendaId}/Papeis": {
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/ObtemPorEncomendaArea": {
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/Usuario/{usuarioId}": {
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EncomendaUsuarios/Encomenda/{encomendaId}": {
            "get": {
                "tags": [
                    "EncomendaUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos": {
            "post": {
                "tags": [
                    "Eventos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Eventos"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos/{id}": {
            "put": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos/paginados": {
            "get": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "nome",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos/detalhados/paginados": {
            "get": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "nome",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos/totalPorUsuario": {
            "get": {
                "tags": [
                    "Eventos"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Eventos/atualizarEncomenda": {
            "post": {
                "tags": [
                    "Eventos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EventoUsuarios": {
            "post": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirEventoUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EventoUsuarios/{id}": {
            "put": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarEventoUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EventoUsuarios/Usuario/{usuarioId}": {
            "get": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EventoUsuarios/Evento/{eventoId}": {
            "get": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/EventoUsuarios/Evento/{eventoId}/Papeis": {
            "get": {
                "tags": [
                    "EventoUsuarios"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Expurgo/paginados": {
            "get": {
                "tags": [
                    "Expurgo"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "dataExclusaoFinal",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Expurgo": {
            "post": {
                "tags": [
                    "Expurgo"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExpurgoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExpurgoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExpurgoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/FeedbackEventos": {
            "post": {
                "tags": [
                    "FeedbackEventos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFeedbackEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFeedbackEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFeedbackEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "FeedbackEventos"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/FeedbackEventos/{id}": {
            "put": {
                "tags": [
                    "FeedbackEventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFeedbackEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFeedbackEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFeedbackEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "FeedbackEventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "FeedbackEventos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Funcoes": {
            "post": {
                "tags": [
                    "Funcoes"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFuncaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFuncaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirFuncaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Funcoes/{id}": {
            "put": {
                "tags": [
                    "Funcoes"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFuncaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFuncaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarFuncaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Funcoes"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Funcoes/ObtemFuncoesUsuario": {
            "get": {
                "tags": [
                    "Funcoes"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Funcoes/tipo-funcao": {
            "get": {
                "tags": [
                    "Funcoes"
                ],
                    "parameters": [
                        {
                            "name": "tipoFuncao",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/ETipoFuncao"
                            }
                        },
                        {
                            "name": "modulo",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EModulos"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Funcoes/ObtemPorModulo": {
            "get": {
                "tags": [
                    "Funcoes"
                ],
                    "parameters": [
                        {
                            "name": "modulo",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EModulos"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos": {
            "post": {
                "tags": [
                    "Grupos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "nome",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/{id}": {
            "put": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarGrupoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarGrupoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarGrupoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/ObtemPorUsuario": {
            "get": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "usuarioId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/ObtemTodos": {
            "get": {
                "tags": [
                    "Grupos"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/usuarios/{grupoId}": {
            "get": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "grupoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/usuarios": {
            "post": {
                "tags": [
                    "Grupos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirGrupoUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Grupos"
                ],
                    "parameters": [
                        {
                            "name": "grupoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/usuarios/incluirNoPapel": {
            "post": {
                "tags": [
                    "Grupos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Grupos/usuarios/removerDoPapel": {
            "post": {
                "tags": [
                    "Grupos"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/GrupoUsuario"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/check": {
            "get": {
                "tags": [
                    "HealthCheck"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/check/data-base": {
            "get": {
                "tags": [
                    "HealthCheck"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/check/write-file": {
            "get": {
                "tags": [
                    "HealthCheck"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/check/error-500": {
            "get": {
                "tags": [
                    "HealthCheck"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/check/error-falha-acesso": {
            "get": {
                "tags": [
                    "HealthCheck"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/HistoricoExportacao/{cadernoId}": {
            "get": {
                "tags": [
                    "HistoricoExportacao"
                ],
                    "parameters": [
                        {
                            "name": "cadernoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/Home": {
            "get": {
                "tags": [
                    "Home"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/matriz/descritores": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "Arquivo": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "MatrizId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "AreaId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "AnoEscolarId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "DescritorId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "Arquivo": {
                                    "style": "form"
                                },
                                "MatrizId": {
                                    "style": "form"
                                },
                                "AreaId": {
                                    "style": "form"
                                },
                                "AnoEscolarId": {
                                    "style": "form"
                                },
                                "DescritorId": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/blocoPadrao": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/cadernoPadrao": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/cadernoInep": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/rotacaoInep": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/blocoInep": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/itemPadrao": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/templates/itemInep": {
            "get": {
                "tags": [
                    "Importacoes"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/item": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "EncomendaId": {
                                        "type": "integer",
                                            "format": "int32",
                                                "nullable": true
                                    },
                                    "ItensJson": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "Arquivos": {
                                        "type": "array",
                                            "items": {
                                            "type": "string",
                                                "format": "binary"
                                        },
                                        "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "EncomendaId": {
                                    "style": "form"
                                },
                                "ItensJson": {
                                    "style": "form"
                                },
                                "Arquivos": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/bloco": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "AreaId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "Blocos": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "AreaId": {
                                    "style": "form"
                                },
                                "Blocos": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/caderno": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "Cadernos": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "Rotacoes": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "Cadernos": {
                                    "style": "form"
                                },
                                "Rotacoes": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/item/inep": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "AreaId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "ItensXml": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "Arquivos": {
                                        "type": "array",
                                            "items": {
                                            "type": "string",
                                                "format": "binary"
                                        },
                                        "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "AreaId": {
                                    "style": "form"
                                },
                                "ItensXml": {
                                    "style": "form"
                                },
                                "Arquivos": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/bloco/inep": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "AreaId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "Blocos": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "AreaId": {
                                    "style": "form"
                                },
                                "Blocos": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/caderno/inep": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "EventoId": {
                                        "type": "integer",
                                            "format": "int32"
                                    },
                                    "Cadernos": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    },
                                    "Rotacoes": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "EventoId": {
                                    "style": "form"
                                },
                                "Cadernos": {
                                    "style": "form"
                                },
                                "Rotacoes": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Importacoes/item/encomenda": {
            "post": {
                "tags": [
                    "Importacoes"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemImportacaoEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemImportacaoEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemImportacaoEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemComentarios": {
            "post": {
                "tags": [
                    "ItemComentarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemComentarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemComentarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemComentarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemComentarios/{id}": {
            "delete": {
                "tags": [
                    "ItemComentarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemComentarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemComentarios/paginado": {
            "get": {
                "tags": [
                    "ItemComentarios"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemComentarios/total/{id}": {
            "get": {
                "tags": [
                    "ItemComentarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemDescritores": {
            "post": {
                "tags": [
                    "ItemDescritores"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDescritorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDescritorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDescritorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemDescritores"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemDescritores/{id}": {
            "put": {
                "tags": [
                    "ItemDescritores"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDescritorRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDescritorRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDescritorRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "ItemDescritores"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemDescritores"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemDimensao": {
            "post": {
                "tags": [
                    "ItemDimensao"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDimensaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDimensaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemDimensaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemDimensao"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemDimensao/{id}": {
            "put": {
                "tags": [
                    "ItemDimensao"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDimensaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDimensaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemDimensaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "ItemDimensao"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemDimensao"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemDimensao/ObtemPorTipoVisualizacaoItem": {
            "get": {
                "tags": [
                    "ItemDimensao"
                ],
                    "parameters": [
                        {
                            "name": "tipoVisualizacaoItem",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/ETipoVisualizacaoItem"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemParametrosImpressao": {
            "post": {
                "tags": [
                    "ItemParametrosImpressao"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemParametrosImpressaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemParametrosImpressaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ItemParametrosImpressaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus": {
            "post": {
                "tags": [
                    "ItemStatus"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemStatusRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemStatusRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemStatusRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus/{id}": {
            "put": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemStatusRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemStatusRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemStatusRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus/ordenar": {
            "post": {
                "tags": [
                    "ItemStatus"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/OrdenarItemStatusRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/OrdenarItemStatusRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/OrdenarItemStatusRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus/Evento": {
            "get": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus/Encomenda": {
            "get": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemStatus/VerificaItensAlterados/{eventoId}": {
            "get": {
                "tags": [
                    "ItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemTipo": {
            "get": {
                "tags": [
                    "ItemTipo"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemVersoes/{id}/recuperar": {
            "post": {
                "tags": [
                    "ItemVersoes"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemVersoes": {
            "get": {
                "tags": [
                    "ItemVersoes"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ItemVersoes/{id}": {
            "get": {
                "tags": [
                    "ItemVersoes"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/inserirItemPedido": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/{id}": {
            "delete": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "put": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/excluirItens": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/clonar": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/concluir/lote": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItensRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItensRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItensRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/concluir": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/recusar": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/voltar": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/temAcessoItem/{itemId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/paginados": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "enunciado",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemStatusId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemTipoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "solicitacaoStatusFiltro",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EItemSolicitacaoStatusFiltro"
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        },
                        {
                            "name": "ascendente",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": true
                            }
                        },
                        {
                            "name": "campo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "default": "Codigo",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/exportarItensCSV": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "enunciado",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemStatusId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemTipoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "solicitacaoStatusFiltro",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EItemSolicitacaoStatusFiltro"
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        },
                        {
                            "name": "ascendente",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": true
                            }
                        },
                        {
                            "name": "campo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "default": "Codigo",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/paginadosPorBloco": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "enunciado",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemStatusId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemTipoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "blocoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "concluido",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": false
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/listaParaNavegacao": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "codigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "enunciado",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemStatusId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemTipoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "solicitacaoStatusFiltro",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EItemSolicitacaoStatusFiltro"
                            }
                        },
                        {
                            "name": "anoEscolarId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "ascendente",
                            "in": "query",
                            "schema": {
                                "type": "boolean",
                                "default": true
                            }
                        },
                        {
                            "name": "campo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "default": "Codigo",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/importar": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ImportarItensRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ImportarItensRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ImportarItensRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/itensImportacao/{eventoId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/excluirItensImportacaoAreaEvento": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensImportacaoAreaEventoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensImportacaoAreaEventoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensImportacaoAreaEventoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/excluirItensPedidoEncomenda": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensPedidoEncomendaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensPedidoEncomendaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExcluirItensPedidoEncomendaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/obterImagensItem": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterImagensItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterImagensItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterImagensItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/solicitarAlteracaoImagem": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SolicitarAlteracaoImagemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/SolicitarAlteracaoImagemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/SolicitarAlteracaoImagemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/obterAlteracoesImagemItem/{itemId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/PermissaoPapel/{itemId}/{funcaoId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "funcaoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/itensPorCaderno": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "cadernoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/gerarItensAlternados/{eventoId}": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "file": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "file": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/ObtemDashBoardItemDataPorEvento/{eventoId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/ObtemDashBoardItemDataPorEncomenda/{encomendaId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/exportarHtml": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/exportarDocx": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/exportarDocxLote": {
            "post": {
                "tags": [
                    "Itens"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ExportarHtmlRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/criarAlternativa/{itemId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/excluirAlternativa/{itemId}/{alternativaId}": {
            "delete": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "alternativaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/imagens/paginados": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "tamanho",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int64",
                                "nullable": true
                            }
                        },
                        {
                            "name": "tipoConteudo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/obtemPorPedido/{pedidoId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "pedidoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/AtualizarTodasImagensUtilizadas": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Itens/Encomenda/GerarCodigoItem/{pedidoId}": {
            "get": {
                "tags": [
                    "Itens"
                ],
                    "parameters": [
                        {
                            "name": "pedidoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/LogGeral": {
            "get": {
                "tags": [
                    "LogGeral"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/LogGeral/paginados": {
            "get": {
                "tags": [
                    "LogGeral"
                ],
                    "parameters": [
                        {
                            "name": "entidade",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "acaoLog",
                            "in": "query",
                            "schema": {
                                "$ref": "#/components/schemas/EAcaoLog"
                            }
                        },
                        {
                            "name": "dataInicio",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time",
                                "nullable": true
                            }
                        },
                        {
                            "name": "dataFim",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "format": "date-time",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Matriz/clonar": {
            "post": {
                "tags": [
                    "Matriz"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarMatrizRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarMatrizRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ClonarMatrizRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Matriz": {
            "post": {
                "tags": [
                    "Matriz"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirMatrizRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirMatrizRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirMatrizRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Matriz"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Matriz/{id}": {
            "put": {
                "tags": [
                    "Matriz"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarMatrizRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarMatrizRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarMatrizRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Matriz"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Matriz"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Notificacao/{id}": {
            "get": {
                "tags": [
                    "Notificacao"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "put": {
                "tags": [
                    "Notificacao"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarNotificacaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarNotificacaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarNotificacaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Notificacao/destinatario/paginados": {
            "get": {
                "tags": [
                    "Notificacao"
                ],
                    "parameters": [
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis": {
            "post": {
                "tags": [
                    "Papeis"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/{id}": {
            "put": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPapelRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPapelRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPapelRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/Evento/{eventoId}": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/Encomenda/{encomendaId}": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/Grupo/{grupoId}": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "grupoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/PapeisNaoAssociadasAoParticipante/{eventoId}/{usuarioId}/{areaId}": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/PapeisNaoAssociadasAoParticipanteEncomenda/{encomendaId}/{usuarioId}/{areaId}": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Papeis/grupoUsuario": {
            "get": {
                "tags": [
                    "Papeis"
                ],
                    "parameters": [
                        {
                            "name": "grupoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapeisItemStatus": {
            "post": {
                "tags": [
                    "PapeisItemStatus"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelItemStatusRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelItemStatusRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelItemStatusRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "PapeisItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "papelId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "itemStatusId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "PapeisItemStatus"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapeisItemStatus/papel/{papelId}": {
            "get": {
                "tags": [
                    "PapeisItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "papelId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapeisItemStatus/itemStatus/{itemStatusId}": {
            "get": {
                "tags": [
                    "PapeisItemStatus"
                ],
                    "parameters": [
                        {
                            "name": "itemStatusId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapelFuncoes/Restaurar": {
            "post": {
                "tags": [
                    "PapelFuncoes"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPapelRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPapelRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPapelRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapelFuncoes/restaurarPadrao": {
            "post": {
                "tags": [
                    "PapelFuncoes"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPadraoPapelRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPadraoPapelRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RestaurarPadraoPapelRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/PapelFuncoes": {
            "post": {
                "tags": [
                    "PapelFuncoes"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelFuncaoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelFuncaoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPapelFuncaoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "PapelFuncoes"
                ],
                    "parameters": [
                        {
                            "name": "papelId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "funcaoId",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "PapelFuncoes"
                ],
                    "parameters": [
                        {
                            "name": "papelId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Pedido/lote": {
            "post": {
                "tags": [
                    "Pedido"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoLoteRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoLoteRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoLoteRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Pedido": {
            "post": {
                "tags": [
                    "Pedido"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirPedidoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "distribuicaoPedidoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Pedido/{id}": {
            "put": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPedidoRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPedidoRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarPedidoRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Pedido/ExistePedidoUtilizandoMatriz/{encomendaId}/{matrizId}": {
            "get": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "matrizId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Pedido/usuarioPossuiPedidos/{encomendaId}/{usuarioId}": {
            "get": {
                "tags": [
                    "Pedido"
                ],
                    "parameters": [
                        {
                            "name": "encomendaId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        },
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ProfessorAreas": {
            "post": {
                "tags": [
                    "ProfessorAreas"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirProfessorAreaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirProfessorAreaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirProfessorAreaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ProfessorAreas"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/ProfessorAreas/{id}": {
            "delete": {
                "tags": [
                    "ProfessorAreas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "ProfessorAreas"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/paginados": {
            "get": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "encomendaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "tipoAlteracao",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "itemCodigo",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "areaId",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/Evento/{eventoId}": {
            "get": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/Item/{itemId}": {
            "get": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "itemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/Detalhe/{id}": {
            "get": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/{id}": {
            "get": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "delete": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/RecusarSolicitacao": {
            "post": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RecusarSolicitacaoImagemItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/RecusarSolicitacaoImagemItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/RecusarSolicitacaoImagemItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/AceitarSolicitacao": {
            "post": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AceitarSolicitacaoImagemItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AceitarSolicitacaoImagemItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AceitarSolicitacaoImagemItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/ObterItemComImagemNova": {
            "post": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterItemComImagemNovaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterItemComImagemNovaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ObterItemComImagemNovaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/AnexarImagens/{id}": {
            "post": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "file": {
                                        "type": "string",
                                            "format": "binary",
                                                "nullable": true
                                    }
                                }
                            },
                            "encoding": {
                                "file": {
                                    "style": "form"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/DeletarImagemEditada/{imagemSolicitacaoId}": {
            "delete": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "imagemSolicitacaoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/CancelarSolicitacao/{solicitacaoImagemId}": {
            "delete": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "parameters": [
                        {
                            "name": "solicitacaoImagemId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/SolicitacaoImagemItem/ConcluirEdicao": {
            "post": {
                "tags": [
                    "SolicitacaoImagemItem"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirSolicitacaoImagemItemRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirSolicitacaoImagemItemRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ConcluirSolicitacaoImagemItemRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/TipoMedias": {
            "get": {
                "tags": [
                    "TipoMedias"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/TipoMedias/{id}": {
            "get": {
                "tags": [
                    "TipoMedias"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios": {
            "post": {
                "tags": [
                    "Usuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/InserirUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/{id}": {
            "put": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            },
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/reset-senha": {
            "post": {
                "tags": [
                    "Usuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ResetUsuarioSenhaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ResetUsuarioSenhaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/ResetUsuarioSenhaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/alterar-senha": {
            "post": {
                "tags": [
                    "Usuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioSenhaRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioSenhaRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/AlterarUsuarioSenhaRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/autenticar": {
            "post": {
                "tags": [
                    "Usuarios"
                ],
                    "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginRequest"
                            }
                        },
                        "text/json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginRequest"
                            }
                        },
                        "application/*+json": {
                            "schema": {
                                "$ref": "#/components/schemas/LoginRequest"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/sair": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/paginados": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "valor",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        },
                        {
                            "name": "pagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 1
                            }
                        },
                        {
                            "name": "limitePorPagina",
                            "in": "query",
                            "schema": {
                                "type": "integer",
                                "format": "int32",
                                "default": 50
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/obtemNomePorId/{id}": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/obtemPorCpf": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "cpf",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/checkUsuarioExistente": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "cpf",
                            "in": "query",
                            "schema": {
                                "type": "string",
                                "nullable": true
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/participante/{usuarioId}": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "usuarioId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        },
        "/api/Usuarios/Evento/{eventoId}": {
            "get": {
                "tags": [
                    "Usuarios"
                ],
                    "parameters": [
                        {
                            "name": "eventoId",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                        "responses": {
                    "200": {
                        "description": "Success"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "InserirAlternativaRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "identificador": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "correta": {
                        "type": "boolean"
                    },
                    "comentario": {
                        "type": "string",
                            "nullable": true
                    },
                    "justificativa": {
                        "type": "boolean",
                            "nullable": true
                    }
                }
            },
            "AlterarAlternativaRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "identificador": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "correta": {
                        "type": "boolean"
                    },
                    "comentario": {
                        "type": "string",
                            "nullable": true
                    },
                    "justificativa": {
                        "type": "boolean",
                            "nullable": true
                    }
                }
            },
            "InserirAnoEscolarRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarAnoEscolarRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirAreaEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirAreaEventoRequest": {
                "type": "object",
                    "properties": {
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirAreaRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarAreaRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirBlocoRequest": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "caminho": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarBlocoRequest": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "caminho": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "ExcluirBlocosEmLoteRequest": {
                "type": "object",
                    "properties": {
                    "listaIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    },
                    "forcaExcluir": {
                        "type": "boolean"
                    }
                }
            },
            "AdicionarItemNoBlocoRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AdicionarItensNoBlocoEmLoteRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "listaIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "RemoverItemNoBlocoRequest": {
                "type": "object",
                    "properties": {
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "Severity": {
                "enum": [
                    0,
                    1,
                    2
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ValidationFailure": {
                "type": "object",
                    "properties": {
                    "propertyName": {
                        "type": "string",
                            "nullable": true
                    },
                    "errorMessage": {
                        "type": "string",
                            "nullable": true
                    },
                    "attemptedValue": {
                        "type": "object",
                            "nullable": true
                    },
                    "customState": {
                        "type": "object",
                            "nullable": true
                    },
                    "severity": {
                        "$ref": "#/components/schemas/Severity"
                    },
                    "errorCode": {
                        "type": "string",
                            "nullable": true
                    },
                    "formattedMessageArguments": {
                        "type": "array",
                            "items": {
                            "type": "object"
                        },
                        "nullable": true
                    },
                    "formattedMessagePlaceholderValues": {
                        "type": "object",
                            "additionalProperties": {
                            "type": "object"
                        },
                        "nullable": true
                    },
                    "resourceName": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "ValidationResult": {
                "type": "object",
                    "properties": {
                    "isValid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "errors": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ValidationFailure"
                        },
                        "nullable": true,
                            "readOnly": true
                    },
                    "ruleSetsExecuted": {
                        "type": "array",
                            "items": {
                            "type": "string"
                        },
                        "nullable": true,
                            "readOnly": true
                    }
                }
            },
            "AnoEscolar": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Descritor": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigoOrigem": {
                        "type": "string",
                            "nullable": true
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "descritorPaiId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "descritorPai": {
                        "$ref": "#/components/schemas/Descritor"
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "matriz": {
                        "$ref": "#/components/schemas/Matriz"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "anoEscolar": {
                        "$ref": "#/components/schemas/AnoEscolar"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "EModulos": {
                "enum": [
                    1,
                    2,
                    3
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ETipoFuncao": {
                "enum": [
                    1,
                    2
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "TipoFuncao": {
                "type": "object",
                    "properties": {
                    "funcaoId": {
                        "type": "string",
                            "nullable": true
                    },
                    "funcao": {
                        "$ref": "#/components/schemas/Funcao"
                    },
                    "tipo": {
                        "$ref": "#/components/schemas/ETipoFuncao"
                    }
                }
            },
            "Funcao": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "string",
                            "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "modulo": {
                        "$ref": "#/components/schemas/EModulos"
                    },
                    "tipoFuncoes": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/TipoFuncao"
                        },
                        "nullable": true
                    },
                    "papeis": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/PapelFuncao"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "PapelFuncao": {
                "type": "object",
                    "properties": {
                    "papel": {
                        "$ref": "#/components/schemas/Papel"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "funcao": {
                        "$ref": "#/components/schemas/Funcao"
                    },
                    "funcaoId": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ItemStatus": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "somenteLeitura": {
                        "type": "boolean"
                    },
                    "importado": {
                        "type": "boolean"
                    },
                    "emEdicao": {
                        "type": "boolean"
                    },
                    "concluido": {
                        "type": "boolean"
                    },
                    "unicoUsuarioResponsavel": {
                        "type": "boolean"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "itens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Item"
                        },
                        "nullable": true
                    },
                    "papeisItemStatus": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/PapelItemStatus"
                        },
                        "nullable": true,
                            "readOnly": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "PapelItemStatus": {
                "type": "object",
                    "properties": {
                    "papel": {
                        "$ref": "#/components/schemas/Papel"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemStatus": {
                        "$ref": "#/components/schemas/ItemStatus"
                    },
                    "itemStatusId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Papel": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "funcoes": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/PapelFuncao"
                        },
                        "nullable": true
                    },
                    "eventoUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EventoUsuario"
                        },
                        "nullable": true
                    },
                    "encomendaUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EncomendaUsuario"
                        },
                        "nullable": true
                    },
                    "grupoUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/GrupoUsuario"
                        },
                        "nullable": true
                    },
                    "papeisItemStatus": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/PapelItemStatus"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "GrupoUsuario": {
                "type": "object",
                    "properties": {
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "papel": {
                        "$ref": "#/components/schemas/Papel"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Grupo": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "grupoUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/GrupoUsuario"
                        },
                        "nullable": true
                    },
                    "papeis": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Papel"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Matriz": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "descritores": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Descritor"
                        },
                        "nullable": true
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "EDificuldade": {
                "enum": [
                    1,
                    2,
                    3
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ItemTipo": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "possuiComando": {
                        "type": "boolean"
                    },
                    "possuiAlternativas": {
                        "type": "boolean"
                    },
                    "redacao": {
                        "type": "boolean"
                    },
                    "discursiva": {
                        "type": "boolean"
                    },
                    "itens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Item"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "DistribuicaoPedido": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "anoEscolar": {
                        "$ref": "#/components/schemas/AnoEscolar"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "itemTipo": {
                        "$ref": "#/components/schemas/ItemTipo"
                    },
                    "itemTipoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "totalItens": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "pedidos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Pedido"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Pedido": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descritor": {
                        "$ref": "#/components/schemas/Descritor"
                    },
                    "quantidade": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "totalItensCriados": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "distribuicaoPedidoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "distribuicaoPedido": {
                        "$ref": "#/components/schemas/DistribuicaoPedido"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "AreaEncomenda": {
                "type": "object",
                    "properties": {
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ETipoVisualizacaoItem": {
                "enum": [
                    1,
                    2
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ETipoEvento": {
                "enum": [
                    1,
                    2
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ConfiguracaoModulo": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "concatArea": {
                        "type": "boolean"
                    },
                    "possuiGabarito": {
                        "type": "boolean"
                    },
                    "possuiPeso": {
                        "type": "boolean"
                    },
                    "tipoVisualizacaoItem": {
                        "$ref": "#/components/schemas/ETipoVisualizacaoItem"
                    },
                    "maximoCaracteresResposta": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "possuiComentarioAlternativa": {
                        "type": "boolean"
                    },
                    "possuiJustificativaAlternativa": {
                        "type": "boolean"
                    },
                    "numeroLinhasResposta": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "rolagemAutomaticaResposta": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "tipoEvento": {
                        "$ref": "#/components/schemas/ETipoEvento"
                    },
                    "possuiDificuldadeItem": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "possuiDescritor": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Encomenda": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "matriz": {
                        "$ref": "#/components/schemas/Matriz"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "papeis": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Papel"
                        },
                        "nullable": true
                    },
                    "pedidos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Pedido"
                        },
                        "nullable": true
                    },
                    "encomendaUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EncomendaUsuario"
                        },
                        "nullable": true
                    },
                    "areas": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/AreaEncomenda"
                        },
                        "nullable": true
                    },
                    "configuracoes": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ConfiguracaoModulo"
                        },
                        "nullable": true
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "EncomendaUsuario": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papel": {
                        "$ref": "#/components/schemas/Papel"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Comite": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dataInativacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "token": {
                        "type": "string",
                            "nullable": true
                    },
                    "comiteUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ComiteUsuario"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ComiteUsuario": {
                "type": "object",
                    "properties": {
                    "comiteId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "comite": {
                        "$ref": "#/components/schemas/Comite"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ProfessorArea": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Usuario": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "cpf": {
                        "type": "string",
                            "nullable": true
                    },
                    "senha": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EventoUsuario"
                        },
                        "nullable": true
                    },
                    "encomendaUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EncomendaUsuario"
                        },
                        "nullable": true
                    },
                    "administrador": {
                        "type": "boolean"
                    },
                    "ativo": {
                        "type": "boolean"
                    },
                    "deveAlterarSenha": {
                        "type": "boolean"
                    },
                    "dataExpiracaoSenha": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "comiteUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ComiteUsuario"
                        },
                        "nullable": true
                    },
                    "professorArea": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ProfessorArea"
                        },
                        "nullable": true
                    },
                    "grupoUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/GrupoUsuario"
                        },
                        "nullable": true
                    },
                    "numeroTentativasLogin": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "dataBloqueioLogin": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "EventoUsuario": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuario": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papel": {
                        "$ref": "#/components/schemas/Papel"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Area": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "itens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Item"
                        },
                        "nullable": true
                    },
                    "eventoUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EventoUsuario"
                        },
                        "nullable": true
                    },
                    "encomendaUsuario": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EncomendaUsuario"
                        },
                        "nullable": true
                    },
                    "professorArea": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ProfessorArea"
                        },
                        "nullable": true
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "EOrigemItem": {
                "enum": [
                    1,
                    2,
                    3
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "Alternativa": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "identificador": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "correta": {
                        "type": "boolean"
                    },
                    "comentario": {
                        "type": "string",
                            "nullable": true
                    },
                    "justificativa": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ItemVersao": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "conteudo": {
                        "type": "string",
                            "nullable": true
                    },
                    "itemConteudo": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "numero": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "usuarioCriacao": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ItemAqruivoArmazenamento": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "arquivoArmazenamentoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "arquivoArmazenamento": {
                        "$ref": "#/components/schemas/ArquivoArmazenado"
                    }
                }
            },
            "MemoryStream": {
                "type": "object",
                    "properties": {
                    "canRead": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "canSeek": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "canWrite": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "capacity": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "length": {
                        "type": "integer",
                            "format": "int64",
                                "readOnly": true
                    },
                    "position": {
                        "type": "integer",
                            "format": "int64"
                    },
                    "canTimeout": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "readTimeout": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "writeTimeout": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ArquivoArmazenado": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "identificador": {
                        "type": "string",
                            "nullable": true
                    },
                    "caminho": {
                        "type": "string",
                            "nullable": true
                    },
                    "extensao": {
                        "type": "string",
                            "nullable": true
                    },
                    "tipoConteudo": {
                        "type": "string",
                            "nullable": true
                    },
                    "tamanho": {
                        "type": "integer",
                            "format": "int64"
                    },
                    "itensAqruivoArmazenamento": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ItemAqruivoArmazenamento"
                        },
                        "nullable": true
                    },
                    "arquivo": {
                        "$ref": "#/components/schemas/MemoryStream"
                    },
                    "armazenado": {
                        "type": "boolean"
                    },
                    "historico": {
                        "type": "boolean"
                    },
                    "checkSum": {
                        "type": "string",
                            "nullable": true
                    },
                    "metaDado": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ImagemSolicitacao": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "solicitacao": {
                        "$ref": "#/components/schemas/SolicitacaoImagemItem"
                    },
                    "solicitacaoAlteracaoImagemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "arquivoArmazenadoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "arquivoArmazenado": {
                        "$ref": "#/components/schemas/ArquivoArmazenado"
                    },
                    "imagem": {
                        "type": "string",
                            "nullable": true,
                                "deprecated": true
                    },
                    "editada": {
                        "type": "boolean"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ETipoAlteracaoImagemItem": {
                "enum": [
                    1,
                    2,
                    3,
                    4
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "EStatusSolicitacaoAlteracaoImagem": {
                "enum": [
                    0,
                    1,
                    2,
                    3
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "SolicitacaoImagemItem": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "imagens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ImagemSolicitacao"
                        },
                        "nullable": true
                    },
                    "tipoAlteracao": {
                        "$ref": "#/components/schemas/ETipoAlteracaoImagemItem"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "status": {
                        "$ref": "#/components/schemas/EStatusSolicitacaoAlteracaoImagem"
                    },
                    "usuarioCriacao": {
                        "$ref": "#/components/schemas/Usuario"
                    },
                    "motivoRecusa": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ItemDescritor": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "descritor": {
                        "$ref": "#/components/schemas/Descritor"
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ItemParametrosImpressao": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "quebraTextoBase": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "quebraComando": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "quebraAlternativas": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Item": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "peso": {
                        "type": "number",
                            "format": "double",
                                "nullable": true
                    },
                    "enunciado": {
                        "type": "string",
                            "nullable": true
                    },
                    "comando": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelMapa": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelQuestao": {
                        "type": "string",
                            "nullable": true
                    },
                    "multiResposta": {
                        "type": "boolean"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "origemItem": {
                        "$ref": "#/components/schemas/EOrigemItem"
                    },
                    "itemStatusId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemStatus": {
                        "$ref": "#/components/schemas/ItemStatus"
                    },
                    "itemTipoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemTipo": {
                        "$ref": "#/components/schemas/ItemTipo"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomenda": {
                        "$ref": "#/components/schemas/Encomenda"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "pedido": {
                        "$ref": "#/components/schemas/Pedido"
                    },
                    "pedidoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "alternativas": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Alternativa"
                        },
                        "nullable": true
                    },
                    "itemVersoes": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ItemVersao"
                        },
                        "nullable": true
                    },
                    "solicitacaoImagemItem": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/SolicitacaoImagemItem"
                        },
                        "nullable": true
                    },
                    "blocos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/BlocoItem"
                        },
                        "nullable": true
                    },
                    "itemDescritores": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ItemDescritor"
                        },
                        "nullable": true
                    },
                    "bloqueado": {
                        "type": "boolean",
                            "nullable": true,
                                "readOnly": true
                    },
                    "numeroLinhasResposta": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "rolagemAutomaticaResposta": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "justificativaRotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    },
                    "itemOrigemId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "itemParametrosImpressao": {
                        "$ref": "#/components/schemas/ItemParametrosImpressao"
                    },
                    "itemParametrosImpressaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "CadernoStatus": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "cadernos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Caderno"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "CadernoBloco": {
                "type": "object",
                    "properties": {
                    "posicao": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "posicaoInicialItem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "caderno": {
                        "$ref": "#/components/schemas/Caderno"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "bloco": {
                        "$ref": "#/components/schemas/Bloco"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "CapaProva": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "conteudo": {
                        "type": "string",
                            "nullable": true
                    },
                    "padrao": {
                        "type": "boolean"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "template": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Caderno": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "cadernoStatusId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "cadernoStatus": {
                        "$ref": "#/components/schemas/CadernoStatus"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "blocos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CadernoBloco"
                        },
                        "nullable": true
                    },
                    "capaProva": {
                        "$ref": "#/components/schemas/CapaProva"
                    },
                    "capaProvaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "ultimaExportacao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "md5Hash": {
                        "type": "string",
                            "nullable": true
                    },
                    "ultimaVersao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "AreaEvento": {
                "type": "object",
                    "properties": {
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Evento": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Item"
                        },
                        "nullable": true
                    },
                    "eventoUsuarios": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/EventoUsuario"
                        },
                        "nullable": true
                    },
                    "configuracoes": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ConfiguracaoModulo"
                        },
                        "nullable": true
                    },
                    "papeis": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Papel"
                        },
                        "nullable": true
                    },
                    "blocos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Bloco"
                        },
                        "nullable": true
                    },
                    "cadernos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/Caderno"
                        },
                        "nullable": true
                    },
                    "capasProva": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CapaProva"
                        },
                        "nullable": true
                    },
                    "areas": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/AreaEvento"
                        },
                        "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "ativo": {
                        "type": "boolean"
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "grupo": {
                        "$ref": "#/components/schemas/Grupo"
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "Bloco": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "area": {
                        "$ref": "#/components/schemas/Area"
                    },
                    "items": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/BlocoItem"
                        },
                        "nullable": true
                    },
                    "cadernos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CadernoBloco"
                        },
                        "nullable": true
                    },
                    "possuiItensNaoConcluidos": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "caminho": {
                        "type": "string",
                            "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "BlocoItem": {
                "type": "object",
                    "properties": {
                    "posicao": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "bloco": {
                        "$ref": "#/components/schemas/Bloco"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "item": {
                        "$ref": "#/components/schemas/Item"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "ExportarBlocosRequest": {
                "type": "object",
                    "properties": {
                    "blocoIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "InserirCadernoRequest": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarCadernoRequest": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "ExcluirCadernosEmLoteRequest": {
                "type": "object",
                    "properties": {
                    "listaIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    },
                    "forcaExcluir": {
                        "type": "boolean"
                    }
                }
            },
            "AlterarStatusCadernoRequest": {
                "type": "object",
                    "properties": {
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AdicionarBlocoNoCadernoRequest": {
                "type": "object",
                    "properties": {
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "SelecionarCapaProvaParaCadernoRequest": {
                "type": "object",
                    "properties": {
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "capaProvaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "RemoverBlocoDoCadernoRequest": {
                "type": "object",
                    "properties": {
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "blocoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ExportarCadernoHtmlRequest": {
                "type": "object",
                    "properties": {
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "modelo": {
                        "type": "string",
                            "nullable": true
                    },
                    "hash": {
                        "type": "boolean"
                    }
                }
            },
            "ExportarCadernoCsvRequest": {
                "type": "object",
                    "properties": {
                    "cadernoIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "GeararCapaProvaRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "capaProvaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirCapaProvaRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "conteudo": {
                        "type": "string",
                            "nullable": true
                    },
                    "padrao": {
                        "type": "boolean"
                    },
                    "template": {
                        "type": "boolean"
                    }
                }
            },
            "AlterarCapaProvaRequest": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "conteudo": {
                        "type": "string",
                            "nullable": true
                    },
                    "padrao": {
                        "type": "boolean"
                    }
                }
            },
            "InserirCapaTagRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "textoRico": {
                        "type": "boolean"
                    }
                }
            },
            "CapaTag": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "textoRico": {
                        "type": "boolean"
                    },
                    "capaTagValores": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CapaTagValor"
                        },
                        "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "evento": {
                        "$ref": "#/components/schemas/Evento"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "CapaTagValorCaderno": {
                "type": "object",
                    "properties": {
                    "capaTagValorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "capaTagValor": {
                        "$ref": "#/components/schemas/CapaTagValor"
                    },
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "caderno": {
                        "$ref": "#/components/schemas/Caderno"
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "CapaTagValor": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "capaTagId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "capaTag": {
                        "$ref": "#/components/schemas/CapaTag"
                    },
                    "valor": {
                        "type": "string",
                            "nullable": true
                    },
                    "capaTagValorCadernos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CapaTagValorCaderno"
                        },
                        "nullable": true
                    },
                    "dataCriacao": {
                        "type": "string",
                            "format": "date-time"
                    },
                    "dataAlteracao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "dataExclusao": {
                        "type": "string",
                            "format": "date-time",
                                "nullable": true
                    },
                    "usuarioCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteCriacaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "comiteAlteracaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "usuarioExclusaoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "valid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "invalid": {
                        "type": "boolean",
                            "readOnly": true
                    },
                    "validationResult": {
                        "$ref": "#/components/schemas/ValidationResult"
                    },
                    "getNomeExibicao": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    },
                    "getArtigo": {
                        "type": "string",
                            "nullable": true,
                                "readOnly": true
                    }
                }
            },
            "AlterarCapaTagRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "textoRico": {
                        "type": "boolean"
                    },
                    "capaTagValores": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/CapaTagValor"
                        },
                        "nullable": true
                    }
                }
            },
            "InserirCapaTagValorRequest": {
                "type": "object",
                    "properties": {
                    "capaTagId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "valor": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarCapaTagValorRequest": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "valor": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirCapaTagValorCadernoRequest": {
                "type": "object",
                    "properties": {
                    "capaTagValorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "cadernoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirComiteRequest": {
                "type": "object",
                    "properties": {
                    "comiteId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AdicionarUsuarioComiteRequest": {
                "type": "object",
                    "properties": {
                    "comiteId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioSenha": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "RemoverUsuarioComiteRequest": {
                "type": "object",
                    "properties": {
                    "comiteId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarConfiguracaoModuloRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "quantidadeCadernos": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidadeBlocos": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidadeBlocosPorCaderno": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidadeItensBlocos": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidadeAreasPorCaderno": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "concatArea": {
                        "type": "boolean"
                    },
                    "possuiGabarito": {
                        "type": "boolean"
                    },
                    "possuiPeso": {
                        "type": "boolean"
                    },
                    "tipoVisualizacaoItem": {
                        "$ref": "#/components/schemas/ETipoVisualizacaoItem"
                    },
                    "maximoCaracteresResposta": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "possuiComentarioAlternativa": {
                        "type": "boolean"
                    },
                    "possuiJustificativaAlternativa": {
                        "type": "boolean"
                    },
                    "numeroLinhasResposta": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "rolagemAutomaticaResposta": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "tipoEvento": {
                        "$ref": "#/components/schemas/ETipoEvento"
                    },
                    "possuiDificuldadeItem": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "possuiDescritor": {
                        "type": "boolean",
                            "nullable": true
                    }
                }
            },
            "InserirDescritorRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigoOrigem": {
                        "type": "string",
                            "nullable": true
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "descritorPaiId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "AlterarDescritorRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "codigoOrigem": {
                        "type": "string",
                            "nullable": true
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "descritorPaiId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "InserirDistribuicaoPedidoDescritorRequest": {
                "type": "object",
                    "properties": {
                    "descritorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "distribuicaoPedidoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidade": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirDistribuicaoPedidoRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "totalItens": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemTipoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarDistribuicaoPedidoRequest": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "anoEscolarId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemTipoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "totalItens": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "matrizId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "InserirEncomendaUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "IncluirElaboradorEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirEventoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "ativo": {
                        "type": "boolean"
                    }
                }
            },
            "AlterarEventoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "rotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "ativo": {
                        "type": "boolean"
                    }
                }
            },
            "InserirEventoUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarEventoUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ExpurgoRequest": {
                "type": "object",
                    "properties": {
                    "arquivosIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "InserirFeedbackEventoRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "limiteSuperior": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "limiteInferior": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "aprovado": {
                        "type": "boolean"
                    }
                }
            },
            "AlterarFeedbackEventoRequest": {
                "type": "object",
                    "properties": {
                    "limiteSuperior": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "limiteInferior": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "aprovado": {
                        "type": "boolean"
                    }
                }
            },
            "InserirFuncaoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarFuncaoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirGrupoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarGrupoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirGrupoUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ItemImportacaoEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "itemStatus": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "InserirItemComentarioRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirItemDescritorRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarItemDescritorRequest": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirItemDimensaoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "altura": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "largura": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "tipoVisualizacaoItem": {
                        "$ref": "#/components/schemas/ETipoVisualizacaoItem"
                    }
                }
            },
            "AlterarItemDimensaoRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "altura": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "largura": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "tipoVisualizacaoItem": {
                        "$ref": "#/components/schemas/ETipoVisualizacaoItem"
                    }
                }
            },
            "ItemParametrosImpressaoRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quebraTextoBase": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "quebraComando": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "quebraAlternativas": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirItemStatusRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarItemStatusRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "OrdenarItemStatusRequest": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlternativaDto": {
                "type": "object",
                    "properties": {
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "identificador": {
                        "type": "string",
                            "nullable": true
                    },
                    "ordem": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "id": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "emEdicao": {
                        "type": "boolean"
                    },
                    "correta": {
                        "type": "boolean"
                    },
                    "comentario": {
                        "type": "string",
                            "nullable": true
                    },
                    "justificativa": {
                        "type": "boolean",
                            "nullable": true
                    }
                }
            },
            "InserirItemRequest": {
                "type": "object",
                    "properties": {
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "peso": {
                        "type": "number",
                            "format": "double",
                                "nullable": true
                    },
                    "enunciado": {
                        "type": "string",
                            "nullable": true
                    },
                    "comando": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelMapa": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelQuestao": {
                        "type": "string",
                            "nullable": true
                    },
                    "multiResposta": {
                        "type": "boolean"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "pedidoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemStatusId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemTipoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "numeroLinhasResposta": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "rolagemAutomaticaResposta": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "alternativas": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/AlternativaDto"
                        },
                        "nullable": true
                    },
                    "origemItem": {
                        "$ref": "#/components/schemas/EOrigemItem"
                    },
                    "justificativaRotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    }
                }
            },
            "AlterarItemRequest": {
                "type": "object",
                    "properties": {
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    },
                    "peso": {
                        "type": "number",
                            "format": "double",
                                "nullable": true
                    },
                    "enunciado": {
                        "type": "string",
                            "nullable": true
                    },
                    "comando": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelMapa": {
                        "type": "string",
                            "nullable": true
                    },
                    "labelQuestao": {
                        "type": "string",
                            "nullable": true
                    },
                    "multiResposta": {
                        "type": "boolean"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "numeroLinhasResposta": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "rolagemAutomaticaResposta": {
                        "type": "boolean",
                            "nullable": true
                    },
                    "alternativas": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/AlternativaDto"
                        },
                        "nullable": true
                    },
                    "justificativaRotulo": {
                        "type": "string",
                            "nullable": true
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    }
                }
            },
            "ExcluirItensRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "ids": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    }
                }
            },
            "ClonarItemRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "codigo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "ConcluirItensRequest": {
                "type": "object",
                    "properties": {
                    "itemIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "ConcluirItemRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "EItemSolicitacaoStatusFiltro": {
                "enum": [
                    1,
                    2,
                    3
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ImagemDto": {
                "type": "object",
                    "properties": {
                    "arquivo": {
                        "type": "string",
                            "nullable": true
                    },
                    "imagem": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "ImportarItensRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itensXml": {
                        "type": "string",
                            "nullable": true
                    },
                    "imagens": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/ImagemDto"
                        },
                        "nullable": true
                    }
                }
            },
            "ExcluirItensImportacaoAreaEventoRequest": {
                "type": "object",
                    "properties": {
                    "eventoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ExcluirItensPedidoEncomendaRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "pedidoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ObterImagensItemRequest": {
                "type": "object",
                    "properties": {
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "SolicitarAlteracaoImagemRequest": {
                "type": "object",
                    "properties": {
                    "imagens": {
                        "type": "array",
                            "items": {
                            "type": "string"
                        },
                        "nullable": true
                    },
                    "descricao": {
                        "type": "string",
                            "nullable": true
                    },
                    "itemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "tipoSolicitacao": {
                        "$ref": "#/components/schemas/ETipoAlteracaoImagemItem"
                    }
                }
            },
            "ExportarHtmlRequest": {
                "type": "object",
                    "properties": {
                    "itensIds": {
                        "type": "array",
                            "items": {
                            "type": "integer",
                                "format": "int32"
                        },
                        "nullable": true
                    },
                    "modelo": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "EAcaoLog": {
                "enum": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                    "type": "integer",
                        "format": "int32"
            },
            "ClonarMatrizRequest": {
                "type": "object",
                    "properties": {
                    "matrizOrigemId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirMatrizRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarMatrizRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarNotificacaoRequest": {
                "type": "object",
                    "properties": {
                    "id": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "lida": {
                        "type": "boolean"
                    }
                }
            },
            "InserirPapelRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "AlterarPapelRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "eventoId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "InserirPapelItemStatusRequest": {
                "type": "object",
                    "properties": {
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "itemStatusId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "RestaurarPapelRequest": {
                "type": "object",
                    "properties": {
                    "modulo": {
                        "$ref": "#/components/schemas/EModulos"
                    },
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "nomePapel": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "RestaurarPadraoPapelRequest": {
                "type": "object",
                    "properties": {
                    "modulo": {
                        "$ref": "#/components/schemas/EModulos"
                    },
                    "moduloId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirPapelFuncaoRequest": {
                "type": "object",
                    "properties": {
                    "papelId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "funcaoId": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "InserirPedidoRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidade": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    },
                    "distribuicaoPedidoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirPedidoLoteRequest": {
                "type": "object",
                    "properties": {
                    "pedidos": {
                        "type": "array",
                            "items": {
                            "$ref": "#/components/schemas/InserirPedidoRequest"
                        },
                        "nullable": true
                    }
                }
            },
            "AlterarPedidoRequest": {
                "type": "object",
                    "properties": {
                    "encomendaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "descritorId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "quantidade": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "dificuldade": {
                        "$ref": "#/components/schemas/EDificuldade"
                    },
                    "distribuicaoPedidoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32",
                                "nullable": true
                    }
                }
            },
            "InserirProfessorAreaRequest": {
                "type": "object",
                    "properties": {
                    "areaId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "RecusarSolicitacaoImagemItemRequest": {
                "type": "object",
                    "properties": {
                    "solicitacaoId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "motivoRecusa": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AceitarSolicitacaoImagemItemRequest": {
                "type": "object",
                    "properties": {
                    "solicitacaoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ObterItemComImagemNovaRequest": {
                "type": "object",
                    "properties": {
                    "solicitacaoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "ConcluirSolicitacaoImagemItemRequest": {
                "type": "object",
                    "properties": {
                    "solicitacaoImagemItemId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "InserirUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "cpf": {
                        "type": "string",
                            "nullable": true
                    },
                    "senha": {
                        "type": "string",
                            "nullable": true
                    },
                    "perfilId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "ativo": {
                        "type": "boolean"
                    },
                    "administrador": {
                        "type": "boolean"
                    },
                    "grupoId": {
                        "type": "integer",
                            "format": "int32"
                    }
                }
            },
            "AlterarUsuarioRequest": {
                "type": "object",
                    "properties": {
                    "nome": {
                        "type": "string",
                            "nullable": true
                    },
                    "cpf": {
                        "type": "string",
                            "nullable": true
                    },
                    "perfilId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "ativo": {
                        "type": "boolean"
                    },
                    "administrador": {
                        "type": "boolean"
                    }
                }
            },
            "ResetUsuarioSenhaRequest": {
                "type": "object",
                    "properties": {
                    "usuarioId": {
                        "type": "integer",
                            "format": "int32"
                    },
                    "senha": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "AlterarUsuarioSenhaRequest": {
                "type": "object",
                    "properties": {
                    "senha": {
                        "type": "string",
                            "nullable": true
                    },
                    "novaSenha": {
                        "type": "string",
                            "nullable": true
                    },
                    "confirmaNovaSenha": {
                        "type": "string",
                            "nullable": true
                    }
                }
            },
            "LoginRequest": {
                "type": "object",
                    "properties": {
                    "cpf": {
                        "type": "string",
                            "nullable": true
                    },
                    "senha": {
                        "type": "string",
                            "nullable": true
                    }
                }
            }
        },
        "securitySchemes": {
            "Bearer": {
                "type": "apiKey",
                    "description": "Please insert JWT with Bearer into field",
                        "name": "Authorization",
                            "in": "header"
            }
        }
    },
    "security": [
        {
            "Bearer": []
        }
    ]
}