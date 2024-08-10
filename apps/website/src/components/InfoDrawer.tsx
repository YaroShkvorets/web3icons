'use client'
import cx from 'classnames'
import { Drawer } from 'vaul'
import { CodeBlock } from './CodeBlock'
import { Web3Icon } from './Web3Icon'
import { scaffoldComponent } from '../utils/jsx-scaffold'
import { useAppContext } from '../hooks'
import SegmentedControl from './ControlBar/SegmentedControl'
import { useState } from 'react'
import {
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
} from '@web3icons/core'
import { Button } from './buttons'

export function InfoDrawer({
  metadata,
}: {
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
}) {
  const segmentedOpts = ['dynamic', 'individual']
  const [selectedTab, setSelectedTab] = useState(segmentedOpts[0]!)
  const { type, variant } = useAppContext()

  return (
    <Drawer.Root direction="bottom">
      <Drawer.Trigger asChild>
        <Button
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.31985 5.88439L1.7811 8.00002L4.31985 10.1156C4.37175 10.1572 4.41485 10.2087 4.44661 10.2671C4.47838 10.3255 4.49818 10.3896 4.50485 10.4558C4.51153 10.5219 4.50494 10.5888 4.48548 10.6523C4.46602 10.7159 4.43407 10.775 4.39151 10.826C4.34895 10.8771 4.29664 10.9192 4.23762 10.9498C4.1786 10.9804 4.11407 10.999 4.0478 11.0043C3.98154 11.0097 3.91486 11.0018 3.85168 10.9811C3.7885 10.9604 3.73009 10.9273 3.67985 10.8838L0.67985 8.38377C0.623558 8.33684 0.578269 8.27812 0.547189 8.21175C0.51611 8.14538 0.5 8.07299 0.5 7.9997C0.5 7.92642 0.51611 7.85403 0.547189 7.78766C0.578269 7.72129 0.623558 7.66257 0.67985 7.61564L3.67985 5.11564C3.78179 5.03077 3.91327 4.98988 4.04537 5.00195C4.17747 5.01402 4.29936 5.07807 4.38423 5.18002C4.46909 5.28196 4.50999 5.41344 4.49792 5.54554C4.48585 5.67763 4.42179 5.79952 4.31985 5.88439ZM15.3198 7.61564L12.3198 5.11564C12.2694 5.07362 12.2111 5.04195 12.1484 5.02244C12.0857 5.00293 12.0197 4.99597 11.9543 5.00195C11.8889 5.00793 11.8253 5.02673 11.7672 5.05728C11.7091 5.08783 11.6575 5.12954 11.6155 5.18002C11.5306 5.28196 11.4897 5.41344 11.5018 5.54554C11.5139 5.67763 11.5779 5.79952 11.6799 5.88439L14.2186 8.00002L11.6799 10.1156C11.6279 10.1572 11.5849 10.2087 11.5531 10.2671C11.5213 10.3255 11.5015 10.3896 11.4948 10.4558C11.4882 10.5219 11.4948 10.5888 11.5142 10.6523C11.5337 10.7159 11.5656 10.775 11.6082 10.826C11.6507 10.8771 11.7031 10.9192 11.7621 10.9498C11.8211 10.9804 11.8856 10.999 11.9519 11.0043C12.0182 11.0097 12.0848 11.0018 12.148 10.9811C12.2112 10.9604 12.2696 10.9273 12.3198 10.8838L15.3198 8.38377C15.3761 8.33684 15.4214 8.27812 15.4525 8.21175C15.4836 8.14538 15.4997 8.07299 15.4997 7.9997C15.4997 7.92642 15.4836 7.85403 15.4525 7.78766C15.4214 7.72129 15.3761 7.66257 15.3198 7.61564ZM10.1705 2.03002C10.1088 2.00761 10.0432 1.99758 9.97762 2.00049C9.91203 2.00341 9.84765 2.01922 9.78816 2.04702C9.72867 2.07482 9.67524 2.11407 9.63092 2.16252C9.5866 2.21096 9.55226 2.26767 9.52985 2.32939L5.52985 13.3294C5.50735 13.3911 5.49724 13.4567 5.50011 13.5224C5.50298 13.5881 5.51877 13.6525 5.54657 13.7121C5.57438 13.7717 5.61366 13.8251 5.66216 13.8695C5.71066 13.9139 5.76743 13.9482 5.82922 13.9706C5.884 13.9901 5.94171 14 5.99985 14C6.10253 14 6.20272 13.9684 6.28681 13.9095C6.3709 13.8505 6.43481 13.7672 6.46985 13.6706L10.4699 2.67064C10.4923 2.60892 10.5023 2.54339 10.4994 2.47779C10.4965 2.41219 10.4806 2.34781 10.4528 2.28832C10.425 2.22884 10.3858 2.17541 10.3374 2.13109C10.2889 2.08677 10.2322 2.05242 10.1705 2.03002Z"
                fill="currentColor"
              />
            </svg>
          }
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-gray-darkest/80" />
        <Drawer.Content className="fixed bottom-0 z-10  flex h-[80vh] w-full select-text justify-center md:h-[40vh]">
          <div className="flex w-10/12 select-text flex-col gap-4 overflow-hidden rounded-md border border-gray-lightest bg-gray p-4 md:grid md:w-2/3 md:grid-cols-6">
            <div className="flex flex-col gap-4 p-2 md:col-span-2">
              <Drawer.Title className="flex items-center gap-2">
                <Web3Icon metadata={metadata} variant={variant} size={32} />
                {metadata.name}
              </Drawer.Title>
              <dl className="flex flex-col text-xs">
                {Object.entries(metadata).map(([key, value]) => (
                  <DescItem key={key} label={key} value={value} className="" />
                ))}
              </dl>
            </div>
            <div className="mb-4 flex h-full flex-col gap-2 md:col-span-4">
              <SegmentedControl
                options={segmentedOpts}
                selected={selectedTab}
                onChange={(value) => setSelectedTab(value as string)}
              />
              <CodeBlock
                key={variant}
                title="react"
                code={scaffoldComponent({
                  metadata,
                  type,
                  variant,
                  dynamic: selectedTab === 'dynamic',
                })}
                language="tsx"
              />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

const DescItem = ({
  label,
  value,
  className,
}: {
  label: string
  value: any
  className?: string
}): JSX.Element => {
  return (
    <span
      className={cx(
        'flex items-center justify-between border-b border-gray-lightest py-2 last-of-type:border-0',
        className,
      )}
    >
      <dt className="capitalize text-white/40">{label}</dt>
      <dd>{renderValue(value)}</dd>
    </span>
  )
}

const renderValue = (value: any): React.ReactNode => {
  if (Array.isArray(value)) {
    return value.map((v) => v.toString()).join(', ')
  }

  if (typeof value === 'object' && value !== null) {
    return renderObject(value)
  }

  return String(value)
}

const renderObject = (obj: Record<string, any>): React.ReactNode => {
  return Object.entries(obj).length
}
