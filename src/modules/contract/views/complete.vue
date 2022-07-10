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
					<cl-crud ref="Crud2" padding="0"></cl-crud>
				</template>
			</cl-upsert>
		</cl-crud>

		<cl-form ref="Form"></cl-form>
	</div>
</template>

<script lang="tsx" setup>
import { useCrud, useUpsert, useTable, useForm, useAdvSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

const Crud = useCrud(
	{
		service: service.base.contract.complete
	},
	(app) => {
		app.refresh();
	}
);

const Upsert = useUpsert({
	items: [
		{
			label: '日期',
			prop: 'date',
			required: true,
			span: 12,
			component: {
				name: 'el-date-picker',
				props: {
					type: 'date'
				}
			}
		},
		{
			label: '收款名称',
			prop: 'name',
			span: 12,
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '项目',
			span: 12,
			required: true,
			prop: 'belongProject',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '合同名称',
			span: 12,
			required: true,
			prop: 'contractName',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '合同金额',
			span: 12,
			prop: 'contractAmount',
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '甲方单位',
			prop: 'partyA',
			span: 12,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '结算类型',
			prop: 'paymentType',
			span: 12,
			component: {
				name: 'el-select',
				props: {
					placeholder: '请选择'
				},
				options: [
					{ label: '按进度付款', value: 1 },
					{ label: '按合同付款', value: 2 }
				]
			}
		},
		{
			label: '罚款',
			span: 12,
			prop: 'mulct',
			required: true,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '扣款',
			span: 12,
			prop: 'deductions',
			required: true,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '已开票金额',
			span: 12,
			prop: 'invoicedAmount',
			required: true,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '已收款金额',
			span: 12,
			prop: 'proceedsAmount',
			required: true,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '收款金额',
			span: 12,
			prop: 'amount',
			required: true,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '账户信息',
			prop: 'bankId',
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '账户信息',
			prop: 'informant',
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '备注',
			prop: 'remark',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea'
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
		console.log('onclose');
		done();
	}
});

const Table = useTable({
	columns: [
		{
			type: 'selection'
		},
		{
			label: '收款编号',
			prop: 'proceedId',
			fixed: true,
			width: 180
		},
		{
			label: '收款名称',
			prop: 'name',
			fixed: true,
			width: 180
		},
		{
			label: '项目',
			prop: 'belongProject',
			width: 180
		},
		{
			label: '甲方单位',
			prop: 'partyA',
			width: 180
		},
		{
			label: '合同名称',
			prop: 'contractName',
			width: 180
		},
		{
			label: '合同金额',
			prop: 'contractAmount',
			width: 100
		},
		{
			label: '收款金额',
			prop: 'amount',
			width: 100
		},
		{
			label: '填报人',
			prop: 'informant',
			width: 100
		},
		{
			label: '日期',
			prop: 'date',
			width: 100,
			formatter(row: any, column: any, text: string) {
				return text ? text.split(' ')[0] : '--';
			}
		},
		{
			label: '账号信息',
			prop: 'accountInfo',
			width: 100
		},
		{
			label: '流程状态',
			prop: 'status',
			width: 100,
			dict: [
				{
					label: '未提交',
					value: 0
				},
				{
					label: '审批通过',
					value: 1
				},
				{
					label: '作废',
					value: 2
				}
			]
		},
		{
			type: 'op',
			width: 280,
			buttons: [
				'edit',
				'delete',
				// {
				// 	label: '查看',
				// 	type: 'info',
				// 	onClick(...rest) {
				// 		console.log(rest);
				// 		console.log('查看');
				// 	}
				// }
			]
		}
	]
});

const Form = useForm();

// 内嵌
const Crud2 = useCrud(
	{
		service: 'test'
	},
	(app) => {
		app.refresh();
	}
);

const AdvSearch = useAdvSearch({
	items: [
		{
			label: 'name',
			prop: 'name',
			value: 'xxx',
			component: {
				name: 'el-input'
			}
		},
		{
			label: 'select',
			prop: 'select',
			value: 2,
			component: {
				name: 'el-select',
				options: [
					{
						label: 'a',
						value: 1
					},
					{
						label: 'b',
						value: 2
					}
				]
			}
		}
	]
});

function openForm() {
	Form.value?.open({
		title: '自定义4',
		items: [
			{
				label: 'name',
				prop: 'name',
				required: true,
				component: {
					name: 'el-input'
				}
			}
		],
		on: {
			submit(data, { close, done }) {
				console.log(data);
			},
			open(data) {
				console.log('form open', data);
				Crud2.value?.refresh();
			},
			close(done) {
				console.log('form close');
				done();
			}
		}
	});
}
</script>
