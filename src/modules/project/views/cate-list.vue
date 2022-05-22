<template>
	<div class="demo">
		<cl-crud ref="Crud">
			<el-row>
				<cl-refresh-btn />
				<cl-add-btn />
			</el-row>

			<el-row>
				<cl-table ref="Table">
					<template #slot-btn>
						<el-button>btn</el-button>
					</template>
				</cl-table>
			</el-row>

			<el-row>
				<cl-flex1></cl-flex1>
				<cl-pagination></cl-pagination>
			</el-row>

			<cl-upsert ref="Upsert">
				<template #slot-crud>
					<cl-crud ref="Crud2" padding="0">
						<el-row>
							<cl-refresh-btn></cl-refresh-btn>
						</el-row>
						<el-row>
							<cl-table :auto-height="false" ref="Table2"></cl-table>
						</el-row>
					</cl-crud>
				</template>
			</cl-upsert>
		</cl-crud>

		<cl-form ref="Form"></cl-form>
	</div>
</template>

<script lang="tsx" setup>
import { useCrud, useUpsert, useTable, useForm, useAdvSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

const Crud = useCrud(
	{
		service: service.base.sys.project
	},
	(app) => {
		app.refresh();
	}
);

const Upsert = useUpsert({
	items: [
		{
			label: "项目编号",
			prop: "projectId",
			component: {
				name: "el-input",
				props: {
					readonly: true,
					placeholder: "保存自动生成",
					disabled: true
				}
			}
		}
	],
	onInfo(data, { next, close, done }) {
		console.log(data);
		next(data);
		// done({ name: "🐑" });
		// close();
	},
	onSubmit(isEdit, data, { next, close, done }) {
		console.log(isEdit, data);
		next(data);
		// Upsert.value?.close();
	},
	onOpen(isEdit, data) {
		console.log(isEdit, data);
	},
	onClose(done) {
		console.log("onclose");
		done();
	}
});

const Table = useTable({
	columns: [
		{
			type: "selection"
		},
		{
			label: "项目编号",
			prop: "projectId",
			fixed: true,
			width: 100
		},
		{
			label: "项目名称",
			prop: "name",
			fixed: true,
			width: 100
		},
		{
			label: "项目地址",
			prop: "address",
			width: 100
		},
		{
			label: "所属区域",
			prop: "region",
			width: 100
		},
		{
			label: "工程工期",
			prop: "projectTime",
			width: 100
		},
		{
			label: "工程量估算",
			prop: "projectEstimate",
			width: 100
		},
		{
			label: "工程造价",
			prop: "projectCost",
			width: 100
		},
		{
			label: "预期利润",
			prop: "projectProfit",
			width: 100
		},
		{
			label: "造价（大写）",
			prop: "projectCostCapital",
			width: 120
		},
		{
			label: "质量等级",
			prop: "qualityGrade",
			width: 100
		},
		{
			label: "所属分公司",
			prop: "company",
			width: 100
		},
		{
			label: "所属机构",
			prop: "organization",
			width: 100
		},
		{
			label: "立项人",
			prop: "projectPeople",
			width: 100
		},
		{
			label: "立项人联系电话",
			prop: "contract",
			width: 100
		},
		{
			label: "跟踪人",
			prop: "followPeople",
			width: 100
		},
		{
			label: "建设单位",
			prop: "devOrganize",
			width: 100
		},
		{
			label: "建设单位联系人",
			prop: "devContact",
			width: 90
		},
		{
			label: "建设单位联系方式",
			prop: "devContactMethod",
			width: 90
		},
		{
			label: "项目类型",
			prop: "projectCate",
			width: 100
		},
		{
			label: "审批状态",
			prop: "approvalStatus",
			width: 100,
			dict: [
				{
					label: "未提交",
					value: 0
				},
				{
					label: "审批通过",
					value: 1
				},
				{
					label: "作废",
					value: 2
				}
			]
		},
		{
			label: "项目状态",
			prop: "projectStatus",
			width: 100,
			dict: [
				{
					label: "开启",
					value: 1
				},
				{
					label: "关闭",
					value: 0
				}
			]
		},
		{
			label: "开始时间",
			width: 100,
			prop: "startTime"
		},
		{
			label: "结束时间",
			width: 100,
			prop: "endTime"
		},
		{
			type: "op",
			buttons: ["edit", "delete"]
		}
	]
});

const Form = useForm();

// 内嵌
const Crud2 = useCrud(
	{
		service: "test"
	},
	(app) => {
		app.refresh();
	}
);

const Table2 = useTable({
	columns: [
		{
			label: "姓名2",
			prop: "name"
		},
		{
			label: "创建时间",
			prop: "createTime"
		}
	]
});

const AdvSearch = useAdvSearch({
	items: [
		{
			label: "name",
			prop: "name",
			value: "xxx",
			component: {
				name: "el-input"
			}
		},
		{
			label: "select",
			prop: "select",
			value: 2,
			component: {
				name: "el-select",
				options: [
					{
						label: "a",
						value: 1
					},
					{
						label: "b",
						value: 2
					}
				]
			}
		}
	]
});

function openForm() {
	Form.value?.open({
		title: "自定义4",
		items: [
			{
				label: "name",
				prop: "name",
				required: true,
				component: {
					name: "el-input"
				}
			}
		],
		on: {
			submit(data, { close, done }) {
				console.log(data);
			},
			open(data) {
				console.log("form open", data);
				Crud2.value?.refresh();
			},
			close(done) {
				console.log("form close");
				done();
			}
		}
	});
}
</script>
