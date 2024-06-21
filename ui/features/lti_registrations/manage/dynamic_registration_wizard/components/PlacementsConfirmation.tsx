/*
 * Copyright (C) 2024 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {
  canvasPlatformSettings,
  type RegistrationOverlayStore,
} from '../../registration_wizard/registration_settings/RegistrationOverlayState'
import {useScope as useI18nScope} from '@canvas/i18n'
import {LtiPlacements, i18nLtiPlacement, type LtiPlacement} from '../../model/LtiPlacement'
import type {LtiImsRegistration} from '../../model/lti_ims_registration/LtiImsRegistration'
import {Heading} from '@instructure/ui-heading'
import {Flex} from '@instructure/ui-flex'
import {Text} from '@instructure/ui-text'
import {Checkbox} from '@instructure/ui-checkbox'
import {FormFieldGroup} from '@instructure/ui-form-field'
import {ScreenReaderContent} from '@instructure/ui-a11y-content'
import {View} from '@instructure/ui-view'
import {IconButton} from '@instructure/ui-buttons'
import {IconInfoLine} from '@instructure/ui-icons'
import {Tooltip} from '@instructure/ui-tooltip'
import {Img} from '@instructure/ui-img'
import {Responsive} from '@instructure/ui-responsive'
import {useOverlayStore} from '../hooks/useOverlayStore'
import {usePlacements} from '../hooks/usePlacements'

export type PlacementsConfirmationProps = {
  registration: LtiImsRegistration
  overlayStore: RegistrationOverlayStore
}

const I18n = useI18nScope('lti_registration.wizard')

export const PlacementsConfirmation = ({
  registration,
  overlayStore,
}: PlacementsConfirmationProps) => {
  const [overlayState, actions] = useOverlayStore(overlayStore)
  const placements = usePlacements(registration)

  const renderPlacementCheckbox = (placement: LtiPlacement) => {
    const registrationPlacement = canvasPlatformSettings(
      registration.default_configuration
    )?.settings.placements.find(p => p.placement === placement)
    const overlayPlacement = overlayState.registration.placements?.find(p => p.type === placement)
    const checkbox = (
      <Flex direction="row" gap="x-small" key={placement}>
        <Flex.Item>
          <Checkbox
            labelPlacement="end"
            label={
              <Flex gap="small">
                <Text>{i18nLtiPlacement(placement)}</Text>
              </Flex>
            }
            checked={!overlayState.registration.disabledPlacements?.includes(placement)}
            onChange={() => {
              actions.toggleDisabledPlacement(placement)
            }}
          />
        </Flex.Item>
        <Flex.Item>
          <Tooltip
            placement="top"
            constrain="parent"
            renderTip={
              <Responsive
                match="media"
                query={{
                  small: {maxWidth: 500},
                  medium: {minWidth: 500},
                  large: {minWidth: 1000},
                }}
                props={{
                  small: {width: '15rem'},
                  medium: {width: '30rem'},
                  large: {width: '35rem'},
                }}
                render={props => {
                  return (
                    <Img
                      {...props}
                      constrain="contain"
                      src={`/doc/api/images/placements/${placement}.png`}
                      alt={I18n.t('An image showing the %{placement} placement within Canvas', {
                        placement,
                      })}
                    />
                  )
                }}
              />
            }
          >
            <IconButton
              withBackground={false}
              withBorder={false}
              renderIcon={IconInfoLine}
              screenReaderLabel={I18n.t('Tooltip for the %{placement} placement', {
                placement,
              })}
            />
          </Tooltip>
        </Flex.Item>
      </Flex>
    )
    if (placement === LtiPlacements.CourseNavigation) {
      // default: 'enabled' means visible, so not checked.
      const checked =
        (overlayPlacement?.default ?? registrationPlacement?.default ?? 'enabled') === 'disabled'
      return (
        <FormFieldGroup
          rowSpacing="small"
          key={placement}
          name={`${placement}-toggle`}
          description={
            <ScreenReaderContent>
              {I18n.t('Modify the %{placement} placement', {
                placement: i18nLtiPlacement(placement),
              })}
            </ScreenReaderContent>
          }
        >
          {checkbox}
          {!overlayState.registration.disabledPlacements?.includes(placement) && (
            <View padding="0 0 0 medium" display="block" as="div">
              <Checkbox
                checked={checked}
                label={I18n.t('Default to Hidden')}
                onChange={() => {
                  actions.updatePlacement(placement)(p => ({
                    ...p,
                    default: checked ? 'enabled' : 'disabled',
                  }))
                }}
              />
            </View>
          )}
        </FormFieldGroup>
      )
    }
    return checkbox
  }

  return (
    <Flex direction="column" gap="small">
      <Heading>{I18n.t('Placements')}</Heading>
      <Text
        dangerouslySetInnerHTML={{
          __html: I18n.t(
            'Choose where *%{toolName}* may be accessed from. Find more details in the **placements documentation.**',
            {
              toolName: registration.client_name,
              wrappers: [
                '<strong>$1</strong>',
                "<a href='https://canvas.instructure.com/doc/api/file.placements_overview.html' style='text-decoration: underline'>$1</a>",
              ],
            }
          ),
        }}
      />
      {placements.length === 0 ? (
        <Text>
          {I18n.t(
            "This tool has not requested access to any placements. If installed, it will have access to the LTI APIs but won't be visible for users to launch. The app can be managed via the Manage Apps page."
          )}
        </Text>
      ) : (
        <Flex gap="small" direction="column">
          {placements.map(renderPlacementCheckbox)}
        </Flex>
      )}
    </Flex>
  )
}
