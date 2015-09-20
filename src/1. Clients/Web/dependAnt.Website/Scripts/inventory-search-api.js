function ApiInputModel() {
    this.id = ko.observable(10000);
}

function ApiViewModel(apiModel) {
    this.model = apiModel;
    this.id = ko.observable(this.model.Id);
    this.name = ko.observable(this.model.Name);
    this.description = ko.observable(this.model.Description);
    this.version = ko.observable(this.model.Version);
}

var response = ko.observable("Ready to search...");
var gotError = ko.observable(false);

var inputModel = new ApiInputModel();
var viewModel = new ApiViewModel(ApiModel);

var GetApi = function () {
    errors.removeAll();

    var url = "/search/inventory/api/" + inputModel.id();

    $.ajax(url,
    {
        type: "GET",
        headers: {
            "dependAnt.Version": 1,
        },
        data: "id=" + inputModel.id(),
        success: function (data) {
            gotError(false);

            response("Found an API named [" + data.Api.Name + "]");

            viewModel.id(data.Api.Id);
            viewModel.name(data.Api.Name);
            viewModel.description(data.Api.Description);
            viewModel.version(data.Api.Version);
        },
        error: function (jqXHR) {
            gotError(true);

            switch (jqXHR.status) {
                case 400:
                    errors.push("BAD REQUEST: The server could not parse the request");
                    break;
                case 401:
                    errors.push("UNAUTHORIZED: Request was not authorized by server");
                    break;
                case 404:
                    errors.push("NOT FOUND: The server could not find the resource requested.");
                    break;
                case 406:
                    errors.push("NOT ACCEPTED: Request not accepted by server");
                    break;
                case 500:
                    errors.push("INTERNAL SERVER ERROR: An error occurred on the server");
                    break;
            }

            response(jqXHR.status + " (" + jqXHR.statusText + ")");
        }
    });
};

$(document).ready(function () {
    ko.applyBindings();
    prettyPrint();
});
