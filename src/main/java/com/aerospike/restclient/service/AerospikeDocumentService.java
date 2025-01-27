/*
 * Copyright 2021 Aerospike, Inc.
 *
 * Portions may be licensed to Aerospike, Inc. under one or more contributor
 * license agreements WHICH ARE COMPATIBLE WITH THE APACHE LICENSE, VERSION 2.0.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.aerospike.restclient.service;

import com.aerospike.client.policy.Policy;
import com.aerospike.client.policy.WritePolicy;
import com.aerospike.restclient.domain.auth.AuthDetails;
import com.aerospike.restclient.util.AerospikeAPIConstants;

import java.util.List;
import java.util.Map;

public interface AerospikeDocumentService {

    Map<String, Object> getObject(AuthDetails authDetails, String namespace, String set, String key, List<String> bins,
                                  String jsonPath, AerospikeAPIConstants.RecordKeyType keyType, Policy policy);

    void putObject(AuthDetails authDetails, String namespace, String set, String key, List<String> bins,
                   String jsonPath, Object jsonObject, AerospikeAPIConstants.RecordKeyType keyType, WritePolicy policy);

    void appendObject(AuthDetails authDetails, String namespace, String set, String key, List<String> bins,
                      String jsonPath, Object jsonObject, AerospikeAPIConstants.RecordKeyType keyType, WritePolicy policy);

    void deleteObject(AuthDetails authDetails, String namespace, String set, String key, List<String> bins,
                      String jsonPath, AerospikeAPIConstants.RecordKeyType keyType, WritePolicy policy);
}
