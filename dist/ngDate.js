(function () {
    'use strict';
    (angular.module('ngDate', ['ng'])).directive('ngDate', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngModel: '=ngModel',
                isBefore: '=isBefore'
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.bind('change', function () {
                    var format = moment(elem[0].value, 'MMDDYYYY').format('MM/DD/YYYY');
                    elem[0].value = format !== 'Invalid date' ? format : '';
                });
                elem.bind('keyup', function () {
                    if (elem[0].value.replace(/\//g, '').length > 8) {
                        elem[0].value = elem[0].value.substring(0, elem[0].value.length - 1);
                    }
                });
                ctrl.$formatters.push(function (value) {
                    var date = '';
                    if (value) {
                        date = moment(new Date(value)).format('MM/DD/YYYY');
                    }
                    return date;
                });
                ctrl.$parsers.push(function (value) {
                    if (value !== '' && value.length >= 8) {
                        if (value.replace(/\//g, '').length > 8) {
                            value = value.substring(0, value.length - 1);
                        }
                        return (new Date(moment(elem[0].value, 'MMDDYYYY'))).toISOString();
                    } else {
                        return '';
                    }
                });
                scope.$watch('isBefore', function (value) {
                    if (scope.ngModel && value) {
                        ctrl.$setValidity('isBefore', moment(scope.ngModel).isBefore(value));
                    }
                });
                scope.$watch('ngModel', function (value) {
                    if (scope.isBefore && value) {
                        ctrl.$setValidity('isBefore', moment(value).isBefore(scope.isBefore));
                    }
                    if (value) {
                        setTimeout(function () {
                            scope.ngModel = (new Date(value.toString())).toISOString();
                        }, 10);
                    }
                });
            }
        };
    });
})(window, document);
