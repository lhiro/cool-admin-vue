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
		service: service.base.contract.index
	},
	(app) => {
		app.refresh();
	}
);

const Upsert = useUpsert({
	items: [
		{
			label: '合同名称',
			prop: 'name',
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '签订日期',
			prop: 'signDate',
			span: 12,
			component: {
				name: 'el-date-picker'
			}
		},
		{
			label: '合同编号',
			span: 12,
			required: true,
			prop: 'contractId',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '所属项目',
			prop: 'belongProject',
			span: 12,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '合同类型',
			prop: 'contractCate',
			span: 12,
			component: {
				name: 'el-select',
				props: {
					placeholder: '请选择'
				},
				options: [
					{ label: '合同总价', value: 1 },
					{ label: '单价合同', value: 2 },
					{ label: '成本加酬金合同', value: 3 },
					{ label: '施工合同', value: 4 }
				]
			}
		},
		{
			label: '开始时间',
			prop: 'startTime',
			span: 12,
			component: {
				name: 'el-date-picker'
			}
		},
		{
			label: '结束时间',
			prop: 'endTime',
			span: 12,
			component: {
				name: 'el-date-picker'
			}
		},
		{
			label: '合同金额',
			span: 12,
			prop: 'contractAmount',
			required: true,
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
			label: '乙方单位',
			span: 12,
			prop: 'partyB',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '签订人',
			prop: 'signPeople',
			required: true,
			span: 12,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '付款方式',
			prop: 'payMethod',
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
			label: '结算方式',
			prop: 'paymentMethod',
			span: 12,
			component: {
				name: 'el-select',
				props: {
					placeholder: '请选择'
				},
				options: [
					{ label: '按月结算', value: 1 },
					{ label: '分段结算', value: 2 },
					{ label: '目标结算', value: 3 },
					{ label: '竣工后一次结算', value: 4 },
					{ label: '其他', value: 0 }
				]
			}
		},
		{
			label: '预收款',
			prop: 'advancesReceived',
			span: 12,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '质保金',
			prop: 'margin',
			span: 12,
			component: {
				name: 'el-input-number'
			}
		},
		{
			label: '预计回收日期',
			prop: 'expectedRecoveryDate',
			span: 12,
			component: {
				name: 'el-date-picker'
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
			label: '合同编号',
			prop: 'contractId',
			fixed: true,
			width: 180
		},
		{
			label: '合同名称',
			prop: 'name',
			fixed: true,
			width: 180
		},
		{
			label: '合同类型',
			prop: 'contractCate',
			width: 100
		},
		{
			label: '甲方单位',
			prop: 'partyA',
			width: 100
		},
		{
			label: '乙方单位',
			prop: 'partyB',
			width: 100
		},
		{
			label: '所属项目',
			prop: 'belongProject',
			width: 100
		},
		{
			label: '签订人',
			prop: 'signPeople',
			width: 100
		},
		{
			label: '签订日期',
			prop: 'signDate',
			width: 100,
			formatter(row: any, column: any, text: string) {
				return text ? text.split(' ')[0] : '--';
			}
		},
		{
			label: '合同金额',
			prop: 'contractAmount',
			width: 100
		},
		{
			label: '质保金',
			prop: 'margin',
			width: 100
		},
		{
			label: '预期回收日期',
			prop: 'expectedRecoveryDate',
			width: 120,
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
			label: '收款条件',
			width: 100,
			prop: 'payeeCondition'
		},
		{
			type: 'op',
			width: 280,
			buttons: [
				'edit',
				'delete',
				{
					label: '查看',
					type: 'info',
					onClick(...rest) {
						console.log(rest);
						console.log('查看');
					}
				}
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
