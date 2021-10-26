import React, { useState, useMemo, useCallback } from 'react'
import Tab from '../Tab'
import { TabWrapper } from './Style'

type TabListProps = {
    tabs: string[]
}

export const TabList: React.FC<TabListProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const handleTabClick = useCallback((id: number) => {
        setActiveTabIndex(id)
    }, [])

    const renderTabs = useMemo(() => {
        return tabs.map((tab, index) => (
            <Tab text={tab} active={index === activeTabIndex} handleClick={() => handleTabClick(index)} key={index} />
        ))
    }, [tabs, activeTabIndex])

    return <TabWrapper>{renderTabs}</TabWrapper>
}
