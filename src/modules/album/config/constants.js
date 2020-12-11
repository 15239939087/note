const AlbumColumnList = [
  {
    type: "selection",
    reserveSelection: true, // 列表项选择框，切换页面保留前一页的选项
    hidden: true
  },
  {
    name: "entityId",
    label: "ID",
    prop: "id",
    width: "140",
    hidden: false
  },
  {
    label: "奇谱ID",
    name: "qipuId",
    slotName: "qipuId",
    hidden: true,
    "min-width": 30
  },
  {
    label: "显示名",
    name: "displayName",
    prop: "displayName",
    hidden: false,
    "min-width": 30
  },
  {
    label: "创建人",
    name: "createUserName",
    prop: "createUserName",
    hidden: false,
    "min-width": 30
  },
  {
    label: "生产方式",
    name: "source",
    prop: "source",
    "min-width": 20,
    hidden: false
  },
  {
    label: "生产状态",
    name: "releaseStatus",
    prop: "releaseStatus",
    "min-width": 20,
    hidden: false
  },

  {
    label: "操作（按下ALT查看状态）",
    name: "operation",
    hidden: false,
    slotName: "operation",
    "min-width": 20
  }
];

const TableList = [
  {
    id: "1",
    qipuId: "78389123289347",
    displayName: "盗墓笔记",
    createUserName: "图南",
    source: "快编",
    releaseStatus: "已生产",
    children: [
      {
        id: "11",
        qipuId: "7838wqq9289347",
        displayName: "盗墓笔记",
        createUserName: "图南",
        source: "快编",
        releaseStatus: "已生产"
      },
      {
        id: "12",
        qipuId: "78389ew289347",
        displayName: "盗墓笔记",
        createUserName: "图南",
        source: "快编",
        releaseStatus: "已生产"
      }
    ]
  },
  {
    id: "2",
    qipuId: "783892123489347",
    displayName: "盗墓笔记",
    createUserName: "图南",
    source: "快编",
    releaseStatus: "已生产"
  }
];

export default { AlbumColumnList, TableList };
