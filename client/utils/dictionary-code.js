// 字典码
import i18n from '@/i18n'
export const KYC_STATUS_LIST = [
	{
		value: '',
		label: i18n.t('未认证'),
		name: i18n.t('未认证')
	},
	{
		value: 0,
		label: i18n.t('待审核'),
		name: i18n.t('审核中')
	},
	{
		value: 1,
		label:i18n.t('审核通过'),
		name: i18n.t('已认证')
	},
	{
		value: 2,
		label: i18n.t('审核拒绝'),
		name: i18n.t('审核拒绝')
	},
]