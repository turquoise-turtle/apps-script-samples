/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START queryHostedModel]
function queryHostedModel() {
  // When querying hosted models you must always use this
  // specific project number.
  var projectNumber = '414649711441';
  var hostedModelName = 'sample.sentiment';

  // Query the hosted model with a positive statement.
  var predictionString = 'Want to go to the park this weekend?';
  var prediction = Prediction.Hostedmodels.predict(
      {
        input: {
          csvInstance: [predictionString]
        }
      },
      projectNumber,
      hostedModelName);
  // Logs Sentiment: positive.
  Logger.log('Sentiment: ' + prediction.outputLabel);

  // Now query the hosted model with a negative statement.
  predictionString = 'You are not very nice!';
  prediction = Prediction.Hostedmodels.predict(
      {
        input: {
          csvInstance: [predictionString]
        }
      },
      projectNumber,
      hostedModelName);
  // Logs Sentiment: negative.
  Logger.log('Sentiment: ' + prediction.outputLabel);
}
// [END queryHostedModel]

// [START createNewModel]
function createNewModel() {
  // Replace this value with the project number listed in the Google
  // APIs Console project.
  var projectNumber = 'XXXXXXXX';
  var id = 'mylanguageidmodel';
  var storageDataLocation = 'languageidsample/language_id.txt';

  // Returns immediately. Training happens asynchronously.
  var result = Prediction.Trainedmodels.insert(
      {
        id: id,
        storageDataLocation: storageDataLocation
      },
      projectNumber);
  Logger.log(result);
}
// [END createNewModel]

// [START queryTrainingStatus]
function queryTrainingStatus() {
  // Replace this value with the project number listed in the Google
  // APIs Console project.
  var projectNumber = 'XXXXXXXX';
  var id = 'mylanguageidmodel';

  var result = Prediction.Trainedmodels.get(projectNumber, id);
  Logger.log(result.trainingStatus);
}
// [END queryTrainingStatus]

// [START queryTrainedModel]
function queryTrainedModel() {
  // Replace this value with the project number listed in the Google
  // APIs Console project.
  var projectNumber = 'XXXXXXXX';
  var id = 'mylanguageidmodel';
  var query = 'Este es un mensaje de prueba de ejemplo';

  var prediction = Prediction.Trainedmodels.predict(
      {
        input:
          {
            csvInstance: [query]
          }
      },
      projectNumber,
      id);
  // Logs Language: Spanish.
  Logger.log('Language: ' + prediction.outputLabel);
}
// [END queryTrainedModel]
