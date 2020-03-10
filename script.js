var jcontent = 
    {
        "resourceType": "Patient", 
        "id": "xcda",
        "text": { 
          "status": "generated",
          "div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
        },
        "identifier":[ 
          {
            "use": "usual",
            "type": {
              "coding": [
                {
                  "system": "htt://hl7.org/fhir/v2/0203", 
                  "code": "MR"
                }
              ] 
            },
            "system": "urn:oid:2.16.840.1.113883.19.5", 
            "value": "12345"
          } 
        ], 
        "active": true,
        "name": [ // name is a list, because it has []
          {
            "family": [
              "Levin"
            ],
            "given": [
              "Henry"
            ]
          }
        ], 
        "gender": "Male", 
        "birthDate": "2002-09-24",
        "managingOrganization": { // managing organization is NOT a list
          "reference": "Organization/2.16.840.1.113883.19.5", 
          "display": "University Health Network"
        },
        "conditions": [
          "Diabetes",
          "High blood pressure",
          "Asthma"
        ]
      }
      
var output = document.getElementById("output");
output.innerHTML = "Name of patient: " + jcontent.name[0].given + " " + jcontent.name[0].family;

var output2 = document.getElementById("output2") 
output2.innerHTML = "Organization name: " + jcontent.managingOrganization.display + ", " + jcontent.managingOrganization.reference 

var output3 = document.getElementById("output3"); 
output3.innerHTML = "Gender: " + jcontent.gender;

var output4= document.getElementById("output4"); 
output4.innerHTML = "Number of conditions: " + jcontent.conditions.length;

var output5 = document.getElementById("output5"); 
output5.innerHTML = "List of all conditions: ";

for(i = 0; i < jcontent.conditions.length; i++){
    output5.innerHTML += "  -   "  ;
    output5.innerHTML += jcontent.conditions[i];
}

     