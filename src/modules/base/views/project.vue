<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service, named } = useCool();

named("base-contract");

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "项目编号", prop: "projectId", required: true, component: { name: "el-input" } },
		{ label: "项目名称", prop: "name", required: true, component: { name: "el-input" } },
		{ label: "项目地址", prop: "address", required: true, component: { name: "el-input" } },
		{ label: "所属区域", prop: "region", required: true, component: { name: "el-input" } },
		{
			label: "工程工期",
			prop: "projectTime",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }
			},
			required: true
		},
		{
			label: "工程量估算",
			prop: "projectEstimate",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "工程造价", prop: "projectCost", required: true, component: { name: "el-input" } },
		{
			label: "预期利润",
			prop: "projectProfit",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "造价（大写）",
			prop: "projectCostCapital",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "质量等级",
			prop: "qualityGrade",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "所属分公司", prop: "company", required: true, component: { name: "el-input" } },
		{
			label: "所属机构",
			prop: "organization",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "立项人", prop: "projectPeople", required: true, component: { name: "el-input" } },
		{
			label: "立项人联系电话",
			prop: "contract",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "跟踪人", prop: "followPeople", required: true, component: { name: "el-input" } },
		{ label: "建设单位", prop: "devOrganize", required: true, component: { name: "el-input" } },
		{
			label: "建设单位联系人",
			prop: "devContact",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "建设单位联系方式",
			prop: "devContactMethod",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "项目类型", prop: "projectCate", required: true, component: { name: "el-input" } },
		{
			label: "项目状态",
			prop: "projectStatus",
			component: { name: "el-switch" },
			required: true
		},
		{
			label: "审批状态 0: 未提交 1: 审批通过 2: 作废",
			prop: "approvalStatus",
			component: { name: "el-switch" },
			required: true
		},
		{
			label: "时间范围",
			prop: "time",
			component: {
				name: "el-date-picker",
				props: {
					type: "datetimerange",
					valueFormat: "YYYY-MM-DD HH:mm:ss",
					defaultTime: ["2000-01-31T16:00:00.000Z", "2000-02-01T15:59:59.000Z"]
				}
			},
			required: true,
			hook: "datetimeRange"
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "项目编号", prop: "projectId" },
		{ label: "项目名称", prop: "name" },
		{ label: "项目地址", prop: "address" },
		{ label: "所属区域", prop: "region" },
		{ label: "工程工期", prop: "projectTime" },
		{ label: "工程量估算", prop: "projectEstimate" },
		{ label: "工程造价", prop: "projectCost" },
		{ label: "预期利润", prop: "projectProfit" },
		{ label: "造价（大写）", prop: "projectCostCapital" },
		{ label: "质量等级", prop: "qualityGrade" },
		{ label: "所属分公司", prop: "company" },
		{ label: "所属机构", prop: "organization" },
		{ label: "立项人", prop: "projectPeople" },
		{ label: "立项人联系电话", prop: "contract" },
		{ label: "跟踪人", prop: "followPeople" },
		{ label: "建设单位", prop: "devOrganize" },
		{ label: "建设单位联系人", prop: "devContact" },
		{ label: "建设单位联系方式", prop: "devContactMethod" },
		{ label: "项目类型", prop: "projectCate" },
		{ label: "项目状态", prop: "projectStatus", component: { name: "cl-switch" } },
		{
			label: "审批状态 0: 未提交 1: 审批通过 2: 作废",
			prop: "approvalStatus",
			component: { name: "cl-switch" }
		},
		{ label: "开始时间", prop: "startTime" },
		{ label: "结束时间", prop: "endTime" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.base.sys.project
	},
	(app) => {
		app.refresh();
	}
);
</script>
