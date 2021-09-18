(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libs_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(393);
/* harmony import */ var libs_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "reset", e => {
      // 重置查询表单
      this.formRef.current.resetFields();
      this.defParam = {
        pageNo: 1,
        pageSize: 10,
        keyword: ''
      };
      this.formParam = {};
      this.query();
    });

    this.state = {
      tableLoading: false,
      // 表格数据加载状态
      data: []
    };
    this.formRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.defParam = {
      pageNo: 1,
      pageSize: 10,
      keyword: ''
    }; // 默认查询参数

    this.formParam = {}; // 表单上的查询参数
  }

  componentWillMount() {
    if (sessionStorage.getItem("login") !== "1") {
      this.props.history.replace('/Login');
    }
  }

  componentDidMount() {
    this.query();
  }

  query(param) {
    this.setState({
      tableLoading: true
    });
    Object(libs_request__WEBPACK_IMPORTED_MODULE_1__[/* post */ "a"])({
      url: 'report/salesperson',
      param: _objectSpread(_objectSpread(_objectSpread({}, this.defParam), this.formParam), param)
    }).then(d => {
      this.setState(_objectSpread({
        tableLoading: false
      }, d));
    });
  }

  render() {
    let {
      tableLoading,
      data,
      pageNo,
      pageSize,
      totalCnt
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mygl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      loading: tableLoading,
      bordered: true,
      dataSource: data,
      rowKey: "fansId",
      onChange: p => {
        this.defParam = _objectSpread(_objectSpread({}, this.defParam), {}, {
          pageNo: p.current,
          pageSize: p.pageSize
        });
        this.query();
      },
      pagination: {
        current: pageNo,
        pageSize,
        total: totalCnt,
        showTotal: total => `共 ${total} 条`,
        showQuickJumper: true
      },
      scroll: {
        x: 0,
        y: 500
      },
      columns: [{
        title: '邀请方手机号',
        dataIndex: 'fromBuyerMobile',
        align: 'center',
        width: 100
      }, {
        title: '昵称',
        dataIndex: 'nickname',
        align: 'center',
        width: 100,
        ellipsis: true
      }, {
        title: '销售员手机号',
        dataIndex: 'mobile',
        align: 'center',
        width: 100
      }, {
        title: '店铺编号',
        dataIndex: 'kdtId',
        align: 'center',
        width: 100
      }, {
        title: '等级',
        dataIndex: 'level',
        align: 'center',
        width: 100
      }, {
        title: '销售员创建时间',
        dataIndex: 'createAt',
        align: 'center',
        width: 100,
        render: (text, record) => !text ? '  -' : Object(libs_util__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "a"])(new Date(text), "yyyy-MM-dd hh:mm:ss")
      }, {
        title: '同步时间',
        dataIndex: 'createTime',
        align: 'center',
        width: 100,
        render: (text, record) => !text ? '  -' : Object(libs_util__WEBPACK_IMPORTED_MODULE_4__[/* formatDate */ "a"])(new Date(text), "yyyy-MM-dd hh:mm:ss")
      }]
    }));
  }

});
;

/***/ })

}]);