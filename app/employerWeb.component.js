"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployerWebComponent = (function () {
    function EmployerWebComponent(_http, route) {
        this._http = _http;
        this.route = route;
        this.APIKEY = 'c0402b24ca6234';
        this._companyDomain = '&domain=';
        this._companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
        this.companyDetail = {};
    }
    EmployerWebComponent.prototype.ngOnInit = function () {
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        this.getCompanyDetail();
    };
    EmployerWebComponent.prototype.getCompanyDetail = function () {
        var _this = this;
        return this._http.get(this._companyEndpoint)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.companyDetail = data; });
    };
    return EmployerWebComponent;
}());
EmployerWebComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employerWeb.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], EmployerWebComponent);
exports.EmployerWebComponent = EmployerWebComponent;
//# sourceMappingURL=employerWeb.component.js.map