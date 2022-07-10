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
		service: service.base.contract.changes
	},
	(app) => {
		app.refresh();
	}
);

const Upsert = useUpsert({
	items: [
		{
			label: '签证日期',
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
			label: '变更名称',
			prop: 'name',
			span: 12,
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '所属项目',
			span: 11,
			required: true,
			prop: 'belongProject',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '合同变更名称',
			span: 13,
			required: true,
			prop: 'contractName',
			props: {
				labelWidth: '139px'
			},
			component: {
				name: 'el-input'
			}
		},
		{
			label: '变更金额',
			span: 12,
			prop: 'amount',
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '变更签订人',
			span: 12,
			prop: 'signer',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '结算方式',
			prop: 'paymentType',
			span: 12,
			component: {
				name: 'el-select',
				props: {
					placeholder: '请选择'
				},
				options: [
					{ label: '分段付款', value: 3 },
					{ label: '竣工后一次结算', value: 4 },
					{ label: '进度付款', value: 1 },
					{ label: '合同付款', value: 2 }
				]
			}
		},
		{
			label: '收款条件',
			prop: 'receiveTerms',
			required: true,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea'
				}
			}
		},
		{
			label: '主要条款',
			prop: 'mainTerms',
			required: true,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea'
				}
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
			label: '签证编号',
			prop: 'signId',
			fixed: true,
			width: 180
		},
		{
			label: '变更名称',
			prop: 'name',
			fixed: true,
			width: 180
		},
		{
			label: '所属项目',
			prop: 'belongProject',
			width: 180
		},
		{
			label: '变更合同名称',
			prop: 'contractName',
			width: 180
		},
		{
			label: '变更金额',
			prop: 'amount',
			width: 120
		},
		{
			label: '变更签订人',
			prop: 'signer',
			width: 180
		},
		{
			label: '签证日期',
			prop: 'date',
			width: 180,
			formatter(row: any, column: any, text: string) {
				return text ? text.split(' ')[0] : '--';
			}
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
