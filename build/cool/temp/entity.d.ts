declare interface ContractChangesEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 签证编号
	 */
	signId?: BigInt;
	/**
	 * 变更名称
	 */
	name?: string;
	/**
	 * 合同变更名称
	 */
	contractName?: string;
	/**
	 * 项目
	 */
	belongProjectId?: number;
	/**
	 * 项目名称
	 */
	belongProject?: string;
	/**
	 * 签证日期
	 */
	date?: Date;
	/**
	 * 变更金额
	 */
	amount?: BigInt;
	/**
	 * 变更金额（大写）
	 */
	amountCaptial?: BigInt;
	/**
	 * 流程状态 0: 未提交 1: 审批通过 2: 作废
	 */
	status?: boolean;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 主要条款
	 */
	mainTerms?: string;
	/**
	 * 收款条件
	 */
	receiveTerms?: string;
	/**
	 * 变更签订人
	 */
	signer?: string;
	/**
	 * 结算方式 1: 按进度付款 2: 按合同付款 3: 分段付款 4: 竣工后一次结算
	 */
	proceedType?: number;
	/**
	 * 工程量清单id
	 */
	quantitiesId?: BigInt;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface ContractCompleteEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 结算编号
	 */
	completeId?: BigInt;
	/**
	 * 结算名称
	 */
	name?: string;
	/**
	 * 合同名称
	 */
	contractName?: string;
	/**
	 * 项目
	 */
	belongProjectId?: number;
	/**
	 * 项目名称
	 */
	belongProject?: string;
	/**
	 * 甲方单位
	 */
	partyA?: string;
	/**
	 * 罚款
	 */
	mulct?: BigInt;
	/**
	 * 日期
	 */
	date?: Date;
	/**
	 * 合同金额
	 */
	contractAmount?: BigInt;
	/**
	 * 合同金额（大写）
	 */
	contractAmountCaptial?: BigInt;
	/**
	 * 扣款
	 */
	deductions?: BigInt;
	/**
	 * 流程状态 0: 未提交 1: 审批通过 2: 作废
	 */
	status?: boolean;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 结算说明
	 */
	settlementExplain?: string;
	/**
	 * 账户信息
	 */
	accountInfo?: string;
	/**
	 * 银行账户
	 */
	bankAccount?: string;
	/**
	 * 结算类型 1: 按进度付款 2: 按合同付款
	 */
	proceedType?: number;
	/**
	 * 已开票金额
	 */
	invoicedAmount?: BigInt;
	/**
	 * 已收款金额
	 */
	proceedsAmount?: BigInt;
	/**
	 * 收款金额
	 */
	amount?: BigInt;
	/**
	 * 收款金额（大写）
	 */
	amountCapital?: BigInt;
	/**
	 * 经办人
	 */
	informant?: string;
	/**
	 * 工程量清单id
	 */
	quantitiesId?: BigInt;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface ContractListEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 合同编号
	 */
	contractId?: BigInt;
	/**
	 * 合同名称
	 */
	name?: string;
	/**
	 * 合同类型
	 */
	contractCate?: string;
	/**
	 * 甲方单位
	 */
	partyA?: string;
	/**
	 * 乙方单位
	 */
	partyB?: string;
	/**
	 * 所属项目
	 */
	belongProjectId?: number;
	/**
	 * 所属项目名称
	 */
	belongProject?: string;
	/**
	 * 签订人
	 */
	signPeople?: string;
	/**
	 * 签订日期
	 */
	signDate?: Date;
	/**
	 * 合同金额
	 */
	contractAmount?: BigInt;
	/**
	 * 合同金额（大写）
	 */
	contractAmountCapital?: BigInt;
	/**
	 * 质保金
	 */
	margin?: BigInt;
	/**
	 * 预计回收日期
	 */
	expectedRecoveryDate?: Date;
	/**
	 * 流程状态 0: 未提交 1: 审批通过 2: 作废
	 */
	status?: boolean;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 结算方式
	 */
	paymentMethod?: string;
	/**
	 * 付款方式
	 */
	payMethod?: string;
	/**
	 * 预收款
	 */
	advancesReceived?: number;
	/**
	 * 收款条件
	 */
	payeeCondition?: string;
	/**
	 * 工程量清单id
	 */
	quantitiesId?: BigInt;
	/**
	 * 开始时间
	 */
	startTime?: Date;
	/**
	 * 结束时间
	 */
	endTime?: Date;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface ContractProceedsEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 收款编号
	 */
	proceedId?: BigInt;
	/**
	 * 收款名称
	 */
	name?: string;
	/**
	 * 合同名称
	 */
	contractName?: string;
	/**
	 * 项目
	 */
	belongProjectId?: number;
	/**
	 * 项目名称
	 */
	belongProject?: string;
	/**
	 * 甲方单位
	 */
	partyA?: string;
	/**
	 * 罚款
	 */
	mulct?: BigInt;
	/**
	 * 日期
	 */
	date?: Date;
	/**
	 * 合同金额
	 */
	contractAmount?: BigInt;
	/**
	 * 合同金额（大写）
	 */
	contractAmountCaptial?: BigInt;
	/**
	 * 扣款
	 */
	deductions?: BigInt;
	/**
	 * 流程状态 0: 未提交 1: 审批通过 2: 作废
	 */
	status?: boolean;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 银行账户信息id
	 */
	bankId?: BigInt;
	/**
	 * 收款类型 1: 按进度付款 2: 按合同付款
	 */
	paymentType?: number;
	/**
	 * 已开票金额
	 */
	invoicedAmount?: BigInt;
	/**
	 * 已收款金额
	 */
	proceedsAmount?: BigInt;
	/**
	 * 收款金额
	 */
	amount?: BigInt;
	/**
	 * 收款金额（大写）
	 */
	amountCapital?: BigInt;
	/**
	 * 填报人
	 */
	informant?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface ContractProgressEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 申报编号
	 */
	declareId?: BigInt;
	/**
	 * 申报名称
	 */
	name?: string;
	/**
	 * 合同名称
	 */
	contractName?: string;
	/**
	 * 甲方单位
	 */
	partyA?: string;
	/**
	 * 所属项目
	 */
	belongProjectId?: number;
	/**
	 * 所属项目名称
	 */
	belongProject?: string;
	/**
	 * 罚款
	 */
	mulct?: BigInt;
	/**
	 * 日期
	 */
	date?: Date;
	/**
	 * 合同金额
	 */
	contractAmount?: BigInt;
	/**
	 * 合同金额（大写）
	 */
	contractAmountCaptial?: BigInt;
	/**
	 * 扣款
	 */
	deductions?: BigInt;
	/**
	 * 流程状态 0: 未提交 1: 审批通过 2: 作废
	 */
	status?: boolean;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 结算类型 1: 进度结算 2: 完工结算
	 */
	paymentType?: number;
	/**
	 * 工程量清单id
	 */
	quantitiesId?: BigInt;
	/**
	 * 批复金额
	 */
	reply?: BigInt;
	/**
	 * 批复金额（大写）
	 */
	replyCapital?: BigInt;
	/**
	 * 填报人
	 */
	informant?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface ProjectListEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 项目编号
	 */
	projectId?: BigInt;
	/**
	 * 项目名称
	 */
	name?: string;
	/**
	 * 项目地址
	 */
	address?: string;
	/**
	 * 所属区域
	 */
	region?: string;
	/**
	 * 工程工期
	 */
	projectTime?: string;
	/**
	 * 工程量估算
	 */
	projectEstimate?: string;
	/**
	 * 工程造价
	 */
	projectCost?: string;
	/**
	 * 预期利润
	 */
	projectProfit?: string;
	/**
	 * 造价（大写）
	 */
	projectCostCapital?: string;
	/**
	 * 质量等级
	 */
	qualityGrade?: string;
	/**
	 * 所属分公司
	 */
	company?: string;
	/**
	 * 所属机构
	 */
	organization?: string;
	/**
	 * 立项人
	 */
	projectPeople?: string;
	/**
	 * 立项人联系电话
	 */
	contact?: string;
	/**
	 * 跟踪人
	 */
	followPeople?: string;
	/**
	 * 建设单位
	 */
	devOrganize?: string;
	/**
	 * 建设单位联系人
	 */
	devContact?: string;
	/**
	 * 建设单位联系方式
	 */
	devContactMethod?: string;
	/**
	 * 项目类型
	 */
	projectCate?: string;
	/**
	 * 项目状态
	 */
	projectStatus?: string;
	/**
	 * 审批状态 0: 未提交 1: 审批通过 2: 作废
	 */
	approvalStatus?: number;
	/**
	 * 开始时间
	 */
	startTime?: Date;
	/**
	 * 结束时间
	 */
	endTime?: Date;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysDepartmentEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 部门名称
	 */
	name?: string;
	/**
	 * 上级部门ID
	 */
	parentId?: BigInt;
	/**
	 * 排序
	 */
	orderNum?: number;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysLogEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 用户ID
	 */
	userId?: BigInt;
	/**
	 * 行为
	 */
	action?: string;
	/**
	 * ip
	 */
	ip?: string;
	/**
	 * ip地址
	 */
	ipAddr?: string;
	/**
	 * 参数
	 */
	params?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysMenuEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 父菜单ID
	 */
	parentId?: BigInt;
	/**
	 * 菜单名称
	 */
	name?: string;
	/**
	 * 菜单地址
	 */
	router?: string;
	/**
	 * 权限标识
	 */
	perms?: string;
	/**
	 * 类型 0：目录 1：菜单 2：按钮
	 */
	type?: number;
	/**
	 * 图标
	 */
	icon?: string;
	/**
	 * 排序
	 */
	orderNum?: number;
	/**
	 * 视图地址
	 */
	viewPath?: string;
	/**
	 * 路由缓存
	 */
	keepAlive?: boolean;
	/**
	 * 是否显示
	 */
	isShow?: boolean;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysParamEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 键位
	 */
	keyName?: string;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * 数据
	 */
	data?: string;
	/**
	 * 数据类型 0:字符串 1：数组 2：键值对
	 */
	dataType?: number;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysRoleEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 用户ID
	 */
	userId?: string;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * 角色标签
	 */
	label?: string;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 数据权限是否关联上下级
	 */
	relevance?: number;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface BaseSysUserEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 部门ID
	 */
	departmentId?: BigInt;
	/**
	 * 姓名
	 */
	name?: string;
	/**
	 * 用户名
	 */
	username?: string;
	/**
	 * 密码
	 */
	password?: string;
	/**
	 * 密码版本, 作用是改完密码，让原来的token失效
	 */
	passwordV?: number;
	/**
	 * 昵称
	 */
	nickName?: string;
	/**
	 * 头像
	 */
	headImg?: string;
	/**
	 * 手机
	 */
	phone?: string;
	/**
	 * 邮箱
	 */
	email?: string;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 状态 0:禁用 1：启用
	 */
	status?: boolean;
	/**
	 * socketId
	 */
	socketId?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface DemoGoodsEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 图片
	 */
	pic?: string;
	/**
	 * 价格
	 */
	price?: number;
	/**
	 * 分类
	 */
	type?: number;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface DictInfoEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 类型ID
	 */
	typeId?: number;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * 排序
	 */
	orderNum?: number;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface DictTypeEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * 标识
	 */
	key?: string;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface SpaceInfoEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 地址
	 */
	url?: string;
	/**
	 * 类型
	 */
	type?: string;
	/**
	 * 分类ID
	 */
	classifyId?: BigInt;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface SpaceTypeEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 类别名称
	 */
	name?: string;
	/**
	 * 父分类ID
	 */
	parentId?: number;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}

declare interface TaskInfoEntity {
	/**
	 * ID
	 */
	id?: number;
	/**
	 * 任务ID
	 */
	jobId?: string;
	/**
	 * 任务配置
	 */
	repeatConf?: string;
	/**
	 * 名称
	 */
	name?: string;
	/**
	 * cron
	 */
	cron?: string;
	/**
	 * 最大执行次数 不传为无限次
	 */
	limit?: number;
	/**
	 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
	 */
	every?: number;
	/**
	 * 备注
	 */
	remark?: string;
	/**
	 * 状态 0:停止 1：运行
	 */
	status?: boolean;
	/**
	 * 开始时间
	 */
	startDate?: Date;
	/**
	 * 结束时间
	 */
	endDate?: Date;
	/**
	 * 数据
	 */
	data?: string;
	/**
	 * 执行的service实例ID
	 */
	service?: string;
	/**
	 * 状态 0:系统 1：用户
	 */
	type?: number;
	/**
	 * 下一次执行时间
	 */
	nextRunTime?: Date;
	/**
	 * 状态 0:cron 1：时间间隔
	 */
	taskType?: number;
	/**
	 * 创建时间
	 */
	createTime?: Date;
	/**
	 * 更新时间
	 */
	updateTime?: Date;
	/**
	 * 任意键值
	 */
	[key: string]: any;
}
