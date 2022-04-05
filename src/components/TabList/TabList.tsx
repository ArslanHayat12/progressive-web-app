import React, { useMemo } from 'react'
import { TabType } from '../../types'
import Tab from '../Tab'
import { TabWrapper } from './Style'

type TabListProps = {
    tabs: TabType[]
    activeTab: string
    onChange: (tab: string) => void
}

export const TabList: React.FC<TabListProps> = ({ tabs, activeTab, onChange }) => {
    const renderTabs = useMemo(() => {
        return tabs.map((tab) => {
            const { label, key } = tab

            return <Tab text={label} active={key === activeTab} handleClick={() => onChange(key)} key={key} />
        })
    }, [tabs, activeTab])

    return <TabWrapper columns={tabs.length}>{renderTabs}</TabWrapper>
}
