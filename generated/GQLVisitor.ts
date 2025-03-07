
import { AbstractParseTreeVisitor } from "antlr4ng";


import { GqlProgramContext } from "./GQLParser.js";
import { ProgramActivityContext } from "./GQLParser.js";
import { SessionActivityContext } from "./GQLParser.js";
import { TransactionActivityContext } from "./GQLParser.js";
import { EndTransactionCommandContext } from "./GQLParser.js";
import { SessionSetCommandContext } from "./GQLParser.js";
import { SessionSetSchemaClauseContext } from "./GQLParser.js";
import { SessionSetGraphClauseContext } from "./GQLParser.js";
import { SessionSetTimeZoneClauseContext } from "./GQLParser.js";
import { SetTimeZoneValueContext } from "./GQLParser.js";
import { SessionSetParameterClauseContext } from "./GQLParser.js";
import { SessionSetGraphParameterClauseContext } from "./GQLParser.js";
import { SessionSetBindingTableParameterClauseContext } from "./GQLParser.js";
import { SessionSetValueParameterClauseContext } from "./GQLParser.js";
import { SessionSetParameterNameContext } from "./GQLParser.js";
import { SessionResetCommandContext } from "./GQLParser.js";
import { SessionResetArgumentsContext } from "./GQLParser.js";
import { SessionCloseCommandContext } from "./GQLParser.js";
import { SessionParameterSpecificationContext } from "./GQLParser.js";
import { StartTransactionCommandContext } from "./GQLParser.js";
import { TransactionCharacteristicsContext } from "./GQLParser.js";
import { TransactionModeContext } from "./GQLParser.js";
import { TransactionAccessModeContext } from "./GQLParser.js";
import { RollbackCommandContext } from "./GQLParser.js";
import { CommitCommandContext } from "./GQLParser.js";
import { NestedProcedureSpecificationContext } from "./GQLParser.js";
import { ProcedureSpecificationContext } from "./GQLParser.js";
import { NestedDataModifyingProcedureSpecificationContext } from "./GQLParser.js";
import { NestedQuerySpecificationContext } from "./GQLParser.js";
import { ProcedureBodyContext } from "./GQLParser.js";
import { BindingVariableDefinitionBlockContext } from "./GQLParser.js";
import { BindingVariableDefinitionContext } from "./GQLParser.js";
import { StatementBlockContext } from "./GQLParser.js";
import { StatementContext } from "./GQLParser.js";
import { NextStatementContext } from "./GQLParser.js";
import { GraphVariableDefinitionContext } from "./GQLParser.js";
import { OptTypedGraphInitializerContext } from "./GQLParser.js";
import { GraphInitializerContext } from "./GQLParser.js";
import { BindingTableVariableDefinitionContext } from "./GQLParser.js";
import { OptTypedBindingTableInitializerContext } from "./GQLParser.js";
import { BindingTableInitializerContext } from "./GQLParser.js";
import { ValueVariableDefinitionContext } from "./GQLParser.js";
import { OptTypedValueInitializerContext } from "./GQLParser.js";
import { ValueInitializerContext } from "./GQLParser.js";
import { GraphExpressionContext } from "./GQLParser.js";
import { CurrentGraphContext } from "./GQLParser.js";
import { BindingTableExpressionContext } from "./GQLParser.js";
import { NestedBindingTableQuerySpecificationContext } from "./GQLParser.js";
import { ObjectExpressionPrimaryContext } from "./GQLParser.js";
import { LinearCatalogModifyingStatementContext } from "./GQLParser.js";
import { SimpleCatalogModifyingStatementContext } from "./GQLParser.js";
import { PrimitiveCatalogModifyingStatementContext } from "./GQLParser.js";
import { CreateSchemaStatementContext } from "./GQLParser.js";
import { DropSchemaStatementContext } from "./GQLParser.js";
import { CreateGraphStatementContext } from "./GQLParser.js";
import { OpenGraphTypeContext } from "./GQLParser.js";
import { OfGraphTypeContext } from "./GQLParser.js";
import { GraphTypeLikeGraphContext } from "./GQLParser.js";
import { GraphSourceContext } from "./GQLParser.js";
import { DropGraphStatementContext } from "./GQLParser.js";
import { CreateGraphTypeStatementContext } from "./GQLParser.js";
import { GraphTypeSourceContext } from "./GQLParser.js";
import { CopyOfGraphTypeContext } from "./GQLParser.js";
import { DropGraphTypeStatementContext } from "./GQLParser.js";
import { CallCatalogModifyingProcedureStatementContext } from "./GQLParser.js";
import { LinearDataModifyingStatementContext } from "./GQLParser.js";
import { FocusedLinearDataModifyingStatementContext } from "./GQLParser.js";
import { FocusedLinearDataModifyingStatementBodyContext } from "./GQLParser.js";
import { FocusedNestedDataModifyingProcedureSpecificationContext } from "./GQLParser.js";
import { AmbientLinearDataModifyingStatementContext } from "./GQLParser.js";
import { AmbientLinearDataModifyingStatementBodyContext } from "./GQLParser.js";
import { SimpleLinearDataAccessingStatementContext } from "./GQLParser.js";
import { SimpleDataAccessingStatementContext } from "./GQLParser.js";
import { SimpleDataModifyingStatementContext } from "./GQLParser.js";
import { PrimitiveDataModifyingStatementContext } from "./GQLParser.js";
import { InsertStatementContext } from "./GQLParser.js";
import { SetStatementContext } from "./GQLParser.js";
import { SetItemListContext } from "./GQLParser.js";
import { SetItemContext } from "./GQLParser.js";
import { SetPropertyItemContext } from "./GQLParser.js";
import { SetAllPropertiesItemContext } from "./GQLParser.js";
import { SetLabelItemContext } from "./GQLParser.js";
import { RemoveStatementContext } from "./GQLParser.js";
import { RemoveItemListContext } from "./GQLParser.js";
import { RemoveItemContext } from "./GQLParser.js";
import { RemovePropertyItemContext } from "./GQLParser.js";
import { RemoveLabelItemContext } from "./GQLParser.js";
import { DeleteStatementContext } from "./GQLParser.js";
import { DeleteItemListContext } from "./GQLParser.js";
import { DeleteItemContext } from "./GQLParser.js";
import { CallDataModifyingProcedureStatementContext } from "./GQLParser.js";
import { CompositeQueryStatementContext } from "./GQLParser.js";
import { CompositeQueryExpressionContext } from "./GQLParser.js";
import { QueryConjunctionContext } from "./GQLParser.js";
import { SetOperatorContext } from "./GQLParser.js";
import { CompositeQueryPrimaryContext } from "./GQLParser.js";
import { LinearQueryStatementContext } from "./GQLParser.js";
import { FocusedLinearQueryStatementContext } from "./GQLParser.js";
import { FocusedLinearQueryStatementPartContext } from "./GQLParser.js";
import { FocusedLinearQueryAndPrimitiveResultStatementPartContext } from "./GQLParser.js";
import { FocusedPrimitiveResultStatementContext } from "./GQLParser.js";
import { FocusedNestedQuerySpecificationContext } from "./GQLParser.js";
import { AmbientLinearQueryStatementContext } from "./GQLParser.js";
import { SimpleLinearQueryStatementContext } from "./GQLParser.js";
import { SimpleQueryStatementContext } from "./GQLParser.js";
import { PrimitiveQueryStatementContext } from "./GQLParser.js";
import { MatchStatementContext } from "./GQLParser.js";
import { SimpleMatchStatementContext } from "./GQLParser.js";
import { OptionalMatchStatementContext } from "./GQLParser.js";
import { OptionalOperandContext } from "./GQLParser.js";
import { MatchStatementBlockContext } from "./GQLParser.js";
import { CallQueryStatementContext } from "./GQLParser.js";
import { FilterStatementContext } from "./GQLParser.js";
import { LetStatementContext } from "./GQLParser.js";
import { LetVariableDefinitionListContext } from "./GQLParser.js";
import { LetVariableDefinitionContext } from "./GQLParser.js";
import { ForStatementContext } from "./GQLParser.js";
import { ForItemContext } from "./GQLParser.js";
import { ForItemAliasContext } from "./GQLParser.js";
import { ForItemSourceContext } from "./GQLParser.js";
import { ForOrdinalityOrOffsetContext } from "./GQLParser.js";
import { OrderByAndPageStatementContext } from "./GQLParser.js";
import { PrimitiveResultStatementContext } from "./GQLParser.js";
import { ReturnStatementContext } from "./GQLParser.js";
import { ReturnStatementBodyContext } from "./GQLParser.js";
import { ReturnItemListContext } from "./GQLParser.js";
import { ReturnItemContext } from "./GQLParser.js";
import { ReturnItemAliasContext } from "./GQLParser.js";
import { SelectStatementContext } from "./GQLParser.js";
import { SelectItemListContext } from "./GQLParser.js";
import { SelectItemContext } from "./GQLParser.js";
import { SelectItemAliasContext } from "./GQLParser.js";
import { HavingClauseContext } from "./GQLParser.js";
import { SelectStatementBodyContext } from "./GQLParser.js";
import { SelectGraphMatchListContext } from "./GQLParser.js";
import { SelectGraphMatchContext } from "./GQLParser.js";
import { SelectQuerySpecificationContext } from "./GQLParser.js";
import { CallProcedureStatementContext } from "./GQLParser.js";
import { ProcedureCallContext } from "./GQLParser.js";
import { InlineProcedureCallContext } from "./GQLParser.js";
import { VariableScopeClauseContext } from "./GQLParser.js";
import { BindingVariableReferenceListContext } from "./GQLParser.js";
import { NamedProcedureCallContext } from "./GQLParser.js";
import { ProcedureArgumentListContext } from "./GQLParser.js";
import { ProcedureArgumentContext } from "./GQLParser.js";
import { AtSchemaClauseContext } from "./GQLParser.js";
import { UseGraphClauseContext } from "./GQLParser.js";
import { GraphPatternBindingTableContext } from "./GQLParser.js";
import { GraphPatternYieldClauseContext } from "./GQLParser.js";
import { GraphPatternYieldItemListContext } from "./GQLParser.js";
import { GraphPatternYieldItemContext } from "./GQLParser.js";
import { GraphPatternContext } from "./GQLParser.js";
import { MatchModeContext } from "./GQLParser.js";
import { RepeatableElementsMatchModeContext } from "./GQLParser.js";
import { DifferentEdgesMatchModeContext } from "./GQLParser.js";
import { ElementBindingsOrElementsContext } from "./GQLParser.js";
import { EdgeBindingsOrEdgesContext } from "./GQLParser.js";
import { PathPatternListContext } from "./GQLParser.js";
import { PathPatternContext } from "./GQLParser.js";
import { PathVariableDeclarationContext } from "./GQLParser.js";
import { KeepClauseContext } from "./GQLParser.js";
import { GraphPatternWhereClauseContext } from "./GQLParser.js";
import { InsertGraphPatternContext } from "./GQLParser.js";
import { InsertPathPatternListContext } from "./GQLParser.js";
import { InsertPathPatternContext } from "./GQLParser.js";
import { InsertNodePatternContext } from "./GQLParser.js";
import { InsertEdgePatternContext } from "./GQLParser.js";
import { InsertEdgePointingLeftContext } from "./GQLParser.js";
import { InsertEdgePointingRightContext } from "./GQLParser.js";
import { InsertEdgeUndirectedContext } from "./GQLParser.js";
import { InsertElementPatternFillerContext } from "./GQLParser.js";
import { LabelAndPropertySetSpecificationContext } from "./GQLParser.js";
import { PathPatternPrefixContext } from "./GQLParser.js";
import { PathModePrefixContext } from "./GQLParser.js";
import { PathModeContext } from "./GQLParser.js";
import { PathSearchPrefixContext } from "./GQLParser.js";
import { AllPathSearchContext } from "./GQLParser.js";
import { PathOrPathsContext } from "./GQLParser.js";
import { AnyPathSearchContext } from "./GQLParser.js";
import { NumberOfPathsContext } from "./GQLParser.js";
import { ShortestPathSearchContext } from "./GQLParser.js";
import { AllShortestPathSearchContext } from "./GQLParser.js";
import { AnyShortestPathSearchContext } from "./GQLParser.js";
import { CountedShortestPathSearchContext } from "./GQLParser.js";
import { CountedShortestGroupSearchContext } from "./GQLParser.js";
import { NumberOfGroupsContext } from "./GQLParser.js";
import { PpePathTermContext } from "./GQLParser.js";
import { PpeMultisetAlternationContext } from "./GQLParser.js";
import { PpePatternUnionContext } from "./GQLParser.js";
import { PathTermContext } from "./GQLParser.js";
import { PfPathPrimaryContext } from "./GQLParser.js";
import { PfQuantifiedPathPrimaryContext } from "./GQLParser.js";
import { PfQuestionedPathPrimaryContext } from "./GQLParser.js";
import { PpElementPatternContext } from "./GQLParser.js";
import { PpParenthesizedPathPatternExpressionContext } from "./GQLParser.js";
import { PpSimplifiedPathPatternExpressionContext } from "./GQLParser.js";
import { ElementPatternContext } from "./GQLParser.js";
import { NodePatternContext } from "./GQLParser.js";
import { ElementPatternFillerContext } from "./GQLParser.js";
import { ElementVariableDeclarationContext } from "./GQLParser.js";
import { IsLabelExpressionContext } from "./GQLParser.js";
import { IsOrColonContext } from "./GQLParser.js";
import { ElementPatternPredicateContext } from "./GQLParser.js";
import { ElementPatternWhereClauseContext } from "./GQLParser.js";
import { ElementPropertySpecificationContext } from "./GQLParser.js";
import { PropertyKeyValuePairListContext } from "./GQLParser.js";
import { PropertyKeyValuePairContext } from "./GQLParser.js";
import { EdgePatternContext } from "./GQLParser.js";
import { FullEdgePatternContext } from "./GQLParser.js";
import { FullEdgePointingLeftContext } from "./GQLParser.js";
import { FullEdgeUndirectedContext } from "./GQLParser.js";
import { FullEdgePointingRightContext } from "./GQLParser.js";
import { FullEdgeLeftOrUndirectedContext } from "./GQLParser.js";
import { FullEdgeUndirectedOrRightContext } from "./GQLParser.js";
import { FullEdgeLeftOrRightContext } from "./GQLParser.js";
import { FullEdgeAnyDirectionContext } from "./GQLParser.js";
import { AbbreviatedEdgePatternContext } from "./GQLParser.js";
import { ParenthesizedPathPatternExpressionContext } from "./GQLParser.js";
import { SubpathVariableDeclarationContext } from "./GQLParser.js";
import { ParenthesizedPathPatternWhereClauseContext } from "./GQLParser.js";
import { LabelExpressionNegationContext } from "./GQLParser.js";
import { LabelExpressionNameContext } from "./GQLParser.js";
import { LabelExpressionWildcardContext } from "./GQLParser.js";
import { LabelExpressionParenthesizedContext } from "./GQLParser.js";
import { LabelExpressionConjunctionContext } from "./GQLParser.js";
import { LabelExpressionDisjunctionContext } from "./GQLParser.js";
import { PathVariableReferenceContext } from "./GQLParser.js";
import { ElementVariableReferenceContext } from "./GQLParser.js";
import { GraphPatternQuantifierContext } from "./GQLParser.js";
import { FixedQuantifierContext } from "./GQLParser.js";
import { GeneralQuantifierContext } from "./GQLParser.js";
import { LowerBoundContext } from "./GQLParser.js";
import { UpperBoundContext } from "./GQLParser.js";
import { SimplifiedPathPatternExpressionContext } from "./GQLParser.js";
import { SimplifiedDefaultingLeftContext } from "./GQLParser.js";
import { SimplifiedDefaultingUndirectedContext } from "./GQLParser.js";
import { SimplifiedDefaultingRightContext } from "./GQLParser.js";
import { SimplifiedDefaultingLeftOrUndirectedContext } from "./GQLParser.js";
import { SimplifiedDefaultingUndirectedOrRightContext } from "./GQLParser.js";
import { SimplifiedDefaultingLeftOrRightContext } from "./GQLParser.js";
import { SimplifiedDefaultingAnyDirectionContext } from "./GQLParser.js";
import { SimplifiedContentsContext } from "./GQLParser.js";
import { SimplifiedPathUnionContext } from "./GQLParser.js";
import { SimplifiedMultisetAlternationContext } from "./GQLParser.js";
import { SimplifiedFactorLowLabelContext } from "./GQLParser.js";
import { SimplifiedConcatenationLabelContext } from "./GQLParser.js";
import { SimplifiedFactorHighLabelContext } from "./GQLParser.js";
import { SimplifiedConjunctionLabelContext } from "./GQLParser.js";
import { SimplifiedFactorHighContext } from "./GQLParser.js";
import { SimplifiedQuantifiedContext } from "./GQLParser.js";
import { SimplifiedQuestionedContext } from "./GQLParser.js";
import { SimplifiedTertiaryContext } from "./GQLParser.js";
import { SimplifiedDirectionOverrideContext } from "./GQLParser.js";
import { SimplifiedOverrideLeftContext } from "./GQLParser.js";
import { SimplifiedOverrideUndirectedContext } from "./GQLParser.js";
import { SimplifiedOverrideRightContext } from "./GQLParser.js";
import { SimplifiedOverrideLeftOrUndirectedContext } from "./GQLParser.js";
import { SimplifiedOverrideUndirectedOrRightContext } from "./GQLParser.js";
import { SimplifiedOverrideLeftOrRightContext } from "./GQLParser.js";
import { SimplifiedOverrideAnyDirectionContext } from "./GQLParser.js";
import { SimplifiedSecondaryContext } from "./GQLParser.js";
import { SimplifiedNegationContext } from "./GQLParser.js";
import { SimplifiedPrimaryContext } from "./GQLParser.js";
import { WhereClauseContext } from "./GQLParser.js";
import { YieldClauseContext } from "./GQLParser.js";
import { YieldItemListContext } from "./GQLParser.js";
import { YieldItemContext } from "./GQLParser.js";
import { YieldItemNameContext } from "./GQLParser.js";
import { YieldItemAliasContext } from "./GQLParser.js";
import { GroupByClauseContext } from "./GQLParser.js";
import { GroupingElementListContext } from "./GQLParser.js";
import { GroupingElementContext } from "./GQLParser.js";
import { EmptyGroupingSetContext } from "./GQLParser.js";
import { OrderByClauseContext } from "./GQLParser.js";
import { SortSpecificationListContext } from "./GQLParser.js";
import { SortSpecificationContext } from "./GQLParser.js";
import { SortKeyContext } from "./GQLParser.js";
import { OrderingSpecificationContext } from "./GQLParser.js";
import { NullOrderingContext } from "./GQLParser.js";
import { LimitClauseContext } from "./GQLParser.js";
import { OffsetClauseContext } from "./GQLParser.js";
import { OffsetSynonymContext } from "./GQLParser.js";
import { SchemaReferenceContext } from "./GQLParser.js";
import { AbsoluteCatalogSchemaReferenceContext } from "./GQLParser.js";
import { CatalogSchemaParentAndNameContext } from "./GQLParser.js";
import { RelativeCatalogSchemaReferenceContext } from "./GQLParser.js";
import { PredefinedSchemaReferenceContext } from "./GQLParser.js";
import { AbsoluteDirectoryPathContext } from "./GQLParser.js";
import { RelativeDirectoryPathContext } from "./GQLParser.js";
import { SimpleDirectoryPathContext } from "./GQLParser.js";
import { GraphReferenceContext } from "./GQLParser.js";
import { CatalogGraphParentAndNameContext } from "./GQLParser.js";
import { HomeGraphContext } from "./GQLParser.js";
import { GraphTypeReferenceContext } from "./GQLParser.js";
import { CatalogGraphTypeParentAndNameContext } from "./GQLParser.js";
import { BindingTableReferenceContext } from "./GQLParser.js";
import { ProcedureReferenceContext } from "./GQLParser.js";
import { CatalogProcedureParentAndNameContext } from "./GQLParser.js";
import { CatalogObjectParentReferenceContext } from "./GQLParser.js";
import { ReferenceParameterSpecificationContext } from "./GQLParser.js";
import { NestedGraphTypeSpecificationContext } from "./GQLParser.js";
import { GraphTypeSpecificationBodyContext } from "./GQLParser.js";
import { ElementTypeListContext } from "./GQLParser.js";
import { ElementTypeSpecificationContext } from "./GQLParser.js";
import { NodeTypeSpecificationContext } from "./GQLParser.js";
import { NodeTypePatternContext } from "./GQLParser.js";
import { NodeTypePhraseContext } from "./GQLParser.js";
import { NodeTypePhraseFillerContext } from "./GQLParser.js";
import { NodeTypeFillerContext } from "./GQLParser.js";
import { LocalNodeTypeAliasContext } from "./GQLParser.js";
import { NodeTypeImpliedContentContext } from "./GQLParser.js";
import { NodeTypeKeyLabelSetContext } from "./GQLParser.js";
import { NodeTypeLabelSetContext } from "./GQLParser.js";
import { NodeTypePropertyTypesContext } from "./GQLParser.js";
import { EdgeTypeSpecificationContext } from "./GQLParser.js";
import { EdgeTypePatternContext } from "./GQLParser.js";
import { EdgeTypePhraseContext } from "./GQLParser.js";
import { EdgeTypePhraseFillerContext } from "./GQLParser.js";
import { EdgeTypeFillerContext } from "./GQLParser.js";
import { EdgeTypeImpliedContentContext } from "./GQLParser.js";
import { EdgeTypeKeyLabelSetContext } from "./GQLParser.js";
import { EdgeTypeLabelSetContext } from "./GQLParser.js";
import { EdgeTypePropertyTypesContext } from "./GQLParser.js";
import { EdgeTypePatternDirectedContext } from "./GQLParser.js";
import { EdgeTypePatternPointingRightContext } from "./GQLParser.js";
import { EdgeTypePatternPointingLeftContext } from "./GQLParser.js";
import { EdgeTypePatternUndirectedContext } from "./GQLParser.js";
import { ArcTypePointingRightContext } from "./GQLParser.js";
import { ArcTypePointingLeftContext } from "./GQLParser.js";
import { ArcTypeUndirectedContext } from "./GQLParser.js";
import { SourceNodeTypeReferenceContext } from "./GQLParser.js";
import { DestinationNodeTypeReferenceContext } from "./GQLParser.js";
import { EdgeKindContext } from "./GQLParser.js";
import { EndpointPairPhraseContext } from "./GQLParser.js";
import { EndpointPairContext } from "./GQLParser.js";
import { EndpointPairDirectedContext } from "./GQLParser.js";
import { EndpointPairPointingRightContext } from "./GQLParser.js";
import { EndpointPairPointingLeftContext } from "./GQLParser.js";
import { EndpointPairUndirectedContext } from "./GQLParser.js";
import { ConnectorPointingRightContext } from "./GQLParser.js";
import { ConnectorUndirectedContext } from "./GQLParser.js";
import { SourceNodeTypeAliasContext } from "./GQLParser.js";
import { DestinationNodeTypeAliasContext } from "./GQLParser.js";
import { LabelSetPhraseContext } from "./GQLParser.js";
import { LabelSetSpecificationContext } from "./GQLParser.js";
import { PropertyTypesSpecificationContext } from "./GQLParser.js";
import { PropertyTypeListContext } from "./GQLParser.js";
import { PropertyTypeContext } from "./GQLParser.js";
import { PropertyValueTypeContext } from "./GQLParser.js";
import { BindingTableTypeContext } from "./GQLParser.js";
import { PredefinedTypeLabelContext } from "./GQLParser.js";
import { PathValueTypeLabelContext } from "./GQLParser.js";
import { ListValueTypeAlt1Context } from "./GQLParser.js";
import { ListValueTypeAlt3Context } from "./GQLParser.js";
import { RecordTypeLabelContext } from "./GQLParser.js";
import { OpenDynamicUnionTypeLabelContext } from "./GQLParser.js";
import { DynamicPropertyValueTypeLabelContext } from "./GQLParser.js";
import { ClosedDynamicUnionTypeAtl1Context } from "./GQLParser.js";
import { ClosedDynamicUnionTypeAtl2Context } from "./GQLParser.js";
import { ListValueTypeAlt2Context } from "./GQLParser.js";
import { TypedContext } from "./GQLParser.js";
import { PredefinedTypeContext } from "./GQLParser.js";
import { BooleanTypeContext } from "./GQLParser.js";
import { CharacterStringTypeContext } from "./GQLParser.js";
import { ByteStringTypeContext } from "./GQLParser.js";
import { MinLengthContext } from "./GQLParser.js";
import { MaxLengthContext } from "./GQLParser.js";
import { FixedLengthContext } from "./GQLParser.js";
import { NumericTypeContext } from "./GQLParser.js";
import { ExactNumericTypeContext } from "./GQLParser.js";
import { BinaryExactNumericTypeContext } from "./GQLParser.js";
import { SignedBinaryExactNumericTypeContext } from "./GQLParser.js";
import { UnsignedBinaryExactNumericTypeContext } from "./GQLParser.js";
import { VerboseBinaryExactNumericTypeContext } from "./GQLParser.js";
import { DecimalExactNumericTypeContext } from "./GQLParser.js";
import { PrecisionContext } from "./GQLParser.js";
import { ScaleContext } from "./GQLParser.js";
import { ApproximateNumericTypeContext } from "./GQLParser.js";
import { TemporalTypeContext } from "./GQLParser.js";
import { TemporalInstantTypeContext } from "./GQLParser.js";
import { DatetimeTypeContext } from "./GQLParser.js";
import { LocaldatetimeTypeContext } from "./GQLParser.js";
import { DateTypeContext } from "./GQLParser.js";
import { TimeTypeContext } from "./GQLParser.js";
import { LocaltimeTypeContext } from "./GQLParser.js";
import { TemporalDurationTypeContext } from "./GQLParser.js";
import { TemporalDurationQualifierContext } from "./GQLParser.js";
import { ReferenceValueTypeContext } from "./GQLParser.js";
import { ImmaterialValueTypeContext } from "./GQLParser.js";
import { NullTypeContext } from "./GQLParser.js";
import { EmptyTypeContext } from "./GQLParser.js";
import { GraphReferenceValueTypeContext } from "./GQLParser.js";
import { ClosedGraphReferenceValueTypeContext } from "./GQLParser.js";
import { OpenGraphReferenceValueTypeContext } from "./GQLParser.js";
import { BindingTableReferenceValueTypeContext } from "./GQLParser.js";
import { NodeReferenceValueTypeContext } from "./GQLParser.js";
import { ClosedNodeReferenceValueTypeContext } from "./GQLParser.js";
import { OpenNodeReferenceValueTypeContext } from "./GQLParser.js";
import { EdgeReferenceValueTypeContext } from "./GQLParser.js";
import { ClosedEdgeReferenceValueTypeContext } from "./GQLParser.js";
import { OpenEdgeReferenceValueTypeContext } from "./GQLParser.js";
import { PathValueTypeContext } from "./GQLParser.js";
import { ListValueTypeNameContext } from "./GQLParser.js";
import { ListValueTypeNameSynonymContext } from "./GQLParser.js";
import { RecordTypeContext } from "./GQLParser.js";
import { FieldTypesSpecificationContext } from "./GQLParser.js";
import { FieldTypeListContext } from "./GQLParser.js";
import { NotNullContext } from "./GQLParser.js";
import { FieldTypeContext } from "./GQLParser.js";
import { SearchConditionContext } from "./GQLParser.js";
import { PredicateContext } from "./GQLParser.js";
import { CompOpContext } from "./GQLParser.js";
import { ExistsPredicateContext } from "./GQLParser.js";
import { NullPredicateContext } from "./GQLParser.js";
import { NullPredicatePart2Context } from "./GQLParser.js";
import { ValueTypePredicateContext } from "./GQLParser.js";
import { ValueTypePredicatePart2Context } from "./GQLParser.js";
import { NormalizedPredicatePart2Context } from "./GQLParser.js";
import { DirectedPredicateContext } from "./GQLParser.js";
import { DirectedPredicatePart2Context } from "./GQLParser.js";
import { LabeledPredicateContext } from "./GQLParser.js";
import { LabeledPredicatePart2Context } from "./GQLParser.js";
import { IsLabeledOrColonContext } from "./GQLParser.js";
import { SourceDestinationPredicateContext } from "./GQLParser.js";
import { NodeReferenceContext } from "./GQLParser.js";
import { SourcePredicatePart2Context } from "./GQLParser.js";
import { DestinationPredicatePart2Context } from "./GQLParser.js";
import { EdgeReferenceContext } from "./GQLParser.js";
import { All_differentPredicateContext } from "./GQLParser.js";
import { SamePredicateContext } from "./GQLParser.js";
import { Property_existsPredicateContext } from "./GQLParser.js";
import { SignedExprAltContext } from "./GQLParser.js";
import { PredicateExprAltContext } from "./GQLParser.js";
import { NotExprAltContext } from "./GQLParser.js";
import { PropertyGraphExprAltContext } from "./GQLParser.js";
import { BindingTableExprAltContext } from "./GQLParser.js";
import { ValueFunctionExprAltContext } from "./GQLParser.js";
import { PrimaryExprAltContext } from "./GQLParser.js";
import { MultDivExprAltContext } from "./GQLParser.js";
import { AddSubtractExprAltContext } from "./GQLParser.js";
import { ConcatenationExprAltContext } from "./GQLParser.js";
import { ComparisonExprAltContext } from "./GQLParser.js";
import { ConjunctiveExprAltContext } from "./GQLParser.js";
import { DisjunctiveExprAltContext } from "./GQLParser.js";
import { NormalizedPredicateExprAltContext } from "./GQLParser.js";
import { IsNotExprAltContext } from "./GQLParser.js";
import { ValueFunctionContext } from "./GQLParser.js";
import { BooleanValueExpressionContext } from "./GQLParser.js";
import { CharacterOrByteStringFunctionContext } from "./GQLParser.js";
import { SubCharacterOrByteStringContext } from "./GQLParser.js";
import { TrimSingleCharacterOrByteStringContext } from "./GQLParser.js";
import { FoldCharacterStringContext } from "./GQLParser.js";
import { TrimMultiCharacterCharacterStringContext } from "./GQLParser.js";
import { NormalizeCharacterStringContext } from "./GQLParser.js";
import { NodeReferenceValueExpressionContext } from "./GQLParser.js";
import { EdgeReferenceValueExpressionContext } from "./GQLParser.js";
import { AggregatingValueExpressionContext } from "./GQLParser.js";
import { ValueExpressionPrimaryContext } from "./GQLParser.js";
import { ParenthesizedValueExpressionContext } from "./GQLParser.js";
import { NonParenthesizedValueExpressionPrimaryContext } from "./GQLParser.js";
import { NonParenthesizedValueExpressionPrimarySpecialCaseContext } from "./GQLParser.js";
import { UnsignedValueSpecificationContext } from "./GQLParser.js";
import { NonNegativeIntegerSpecificationContext } from "./GQLParser.js";
import { GeneralValueSpecificationContext } from "./GQLParser.js";
import { DynamicParameterSpecificationContext } from "./GQLParser.js";
import { LetValueExpressionContext } from "./GQLParser.js";
import { ValueQueryExpressionContext } from "./GQLParser.js";
import { CaseExpressionContext } from "./GQLParser.js";
import { CaseAbbreviationContext } from "./GQLParser.js";
import { CaseSpecificationContext } from "./GQLParser.js";
import { SimpleCaseContext } from "./GQLParser.js";
import { SearchedCaseContext } from "./GQLParser.js";
import { SimpleWhenClauseContext } from "./GQLParser.js";
import { SearchedWhenClauseContext } from "./GQLParser.js";
import { ElseClauseContext } from "./GQLParser.js";
import { CaseOperandContext } from "./GQLParser.js";
import { WhenOperandListContext } from "./GQLParser.js";
import { WhenOperandContext } from "./GQLParser.js";
import { ResultContext } from "./GQLParser.js";
import { ResultExpressionContext } from "./GQLParser.js";
import { CastSpecificationContext } from "./GQLParser.js";
import { CastOperandContext } from "./GQLParser.js";
import { CastTargetContext } from "./GQLParser.js";
import { AggregateFunctionContext } from "./GQLParser.js";
import { GeneralSetFunctionContext } from "./GQLParser.js";
import { BinarySetFunctionContext } from "./GQLParser.js";
import { GeneralSetFunctionTypeContext } from "./GQLParser.js";
import { SetQuantifierContext } from "./GQLParser.js";
import { BinarySetFunctionTypeContext } from "./GQLParser.js";
import { DependentValueExpressionContext } from "./GQLParser.js";
import { IndependentValueExpressionContext } from "./GQLParser.js";
import { Element_idFunctionContext } from "./GQLParser.js";
import { BindingVariableReferenceContext } from "./GQLParser.js";
import { PathValueExpressionContext } from "./GQLParser.js";
import { PathValueConstructorContext } from "./GQLParser.js";
import { PathValueConstructorByEnumerationContext } from "./GQLParser.js";
import { PathElementListContext } from "./GQLParser.js";
import { PathElementListStartContext } from "./GQLParser.js";
import { PathElementListStepContext } from "./GQLParser.js";
import { ListValueExpressionContext } from "./GQLParser.js";
import { ListValueFunctionContext } from "./GQLParser.js";
import { TrimListFunctionContext } from "./GQLParser.js";
import { ElementsFunctionContext } from "./GQLParser.js";
import { ListValueConstructorContext } from "./GQLParser.js";
import { ListValueConstructorByEnumerationContext } from "./GQLParser.js";
import { ListElementListContext } from "./GQLParser.js";
import { ListElementContext } from "./GQLParser.js";
import { RecordConstructorContext } from "./GQLParser.js";
import { FieldsSpecificationContext } from "./GQLParser.js";
import { FieldListContext } from "./GQLParser.js";
import { FieldContext } from "./GQLParser.js";
import { TruthValueContext } from "./GQLParser.js";
import { NumericValueExpressionContext } from "./GQLParser.js";
import { NumericValueFunctionContext } from "./GQLParser.js";
import { LengthExpressionContext } from "./GQLParser.js";
import { CardinalityExpressionContext } from "./GQLParser.js";
import { CardinalityExpressionArgumentContext } from "./GQLParser.js";
import { CharLengthExpressionContext } from "./GQLParser.js";
import { ByteLengthExpressionContext } from "./GQLParser.js";
import { PathLengthExpressionContext } from "./GQLParser.js";
import { AbsoluteValueExpressionContext } from "./GQLParser.js";
import { ModulusExpressionContext } from "./GQLParser.js";
import { NumericValueExpressionDividendContext } from "./GQLParser.js";
import { NumericValueExpressionDivisorContext } from "./GQLParser.js";
import { TrigonometricFunctionContext } from "./GQLParser.js";
import { TrigonometricFunctionNameContext } from "./GQLParser.js";
import { GeneralLogarithmFunctionContext } from "./GQLParser.js";
import { GeneralLogarithmBaseContext } from "./GQLParser.js";
import { GeneralLogarithmArgumentContext } from "./GQLParser.js";
import { CommonLogarithmContext } from "./GQLParser.js";
import { NaturalLogarithmContext } from "./GQLParser.js";
import { ExponentialFunctionContext } from "./GQLParser.js";
import { PowerFunctionContext } from "./GQLParser.js";
import { NumericValueExpressionBaseContext } from "./GQLParser.js";
import { NumericValueExpressionExponentContext } from "./GQLParser.js";
import { SquareRootContext } from "./GQLParser.js";
import { FloorFunctionContext } from "./GQLParser.js";
import { CeilingFunctionContext } from "./GQLParser.js";
import { CharacterStringValueExpressionContext } from "./GQLParser.js";
import { ByteStringValueExpressionContext } from "./GQLParser.js";
import { TrimOperandsContext } from "./GQLParser.js";
import { TrimCharacterOrByteStringSourceContext } from "./GQLParser.js";
import { TrimSpecificationContext } from "./GQLParser.js";
import { TrimCharacterOrByteStringContext } from "./GQLParser.js";
import { NormalFormContext } from "./GQLParser.js";
import { StringLengthContext } from "./GQLParser.js";
import { DatetimeValueExpressionContext } from "./GQLParser.js";
import { DatetimeValueFunctionContext } from "./GQLParser.js";
import { DateFunctionContext } from "./GQLParser.js";
import { TimeFunctionContext } from "./GQLParser.js";
import { LocaltimeFunctionContext } from "./GQLParser.js";
import { DatetimeFunctionContext } from "./GQLParser.js";
import { LocaldatetimeFunctionContext } from "./GQLParser.js";
import { DateFunctionParametersContext } from "./GQLParser.js";
import { TimeFunctionParametersContext } from "./GQLParser.js";
import { DatetimeFunctionParametersContext } from "./GQLParser.js";
import { DurationValueExpressionContext } from "./GQLParser.js";
import { DatetimeSubtractionContext } from "./GQLParser.js";
import { DatetimeSubtractionParametersContext } from "./GQLParser.js";
import { DatetimeValueExpression1Context } from "./GQLParser.js";
import { DatetimeValueExpression2Context } from "./GQLParser.js";
import { DurationValueFunctionContext } from "./GQLParser.js";
import { DurationFunctionContext } from "./GQLParser.js";
import { DurationFunctionParametersContext } from "./GQLParser.js";
import { ObjectNameContext } from "./GQLParser.js";
import { ObjectNameOrBindingVariableContext } from "./GQLParser.js";
import { DirectoryNameContext } from "./GQLParser.js";
import { SchemaNameContext } from "./GQLParser.js";
import { GraphNameContext } from "./GQLParser.js";
import { DelimitedGraphNameContext } from "./GQLParser.js";
import { GraphTypeNameContext } from "./GQLParser.js";
import { NodeTypeNameContext } from "./GQLParser.js";
import { EdgeTypeNameContext } from "./GQLParser.js";
import { BindingTableNameContext } from "./GQLParser.js";
import { DelimitedBindingTableNameContext } from "./GQLParser.js";
import { ProcedureNameContext } from "./GQLParser.js";
import { LabelNameContext } from "./GQLParser.js";
import { PropertyNameContext } from "./GQLParser.js";
import { FieldNameContext } from "./GQLParser.js";
import { ElementVariableContext } from "./GQLParser.js";
import { PathVariableContext } from "./GQLParser.js";
import { SubpathVariableContext } from "./GQLParser.js";
import { BindingVariableContext } from "./GQLParser.js";
import { UnsignedLiteralContext } from "./GQLParser.js";
import { GeneralLiteralContext } from "./GQLParser.js";
import { TemporalLiteralContext } from "./GQLParser.js";
import { DateLiteralContext } from "./GQLParser.js";
import { TimeLiteralContext } from "./GQLParser.js";
import { DatetimeLiteralContext } from "./GQLParser.js";
import { ListLiteralContext } from "./GQLParser.js";
import { RecordLiteralContext } from "./GQLParser.js";
import { IdentifierContext } from "./GQLParser.js";
import { RegularIdentifierContext } from "./GQLParser.js";
import { TimeZoneStringContext } from "./GQLParser.js";
import { CharacterStringLiteralContext } from "./GQLParser.js";
import { UnsignedNumericLiteralContext } from "./GQLParser.js";
import { ExactNumericLiteralContext } from "./GQLParser.js";
import { ApproximateNumericLiteralContext } from "./GQLParser.js";
import { UnsignedIntegerContext } from "./GQLParser.js";
import { UnsignedDecimalIntegerContext } from "./GQLParser.js";
import { NullLiteralContext } from "./GQLParser.js";
import { DateStringContext } from "./GQLParser.js";
import { TimeStringContext } from "./GQLParser.js";
import { DatetimeStringContext } from "./GQLParser.js";
import { DurationLiteralContext } from "./GQLParser.js";
import { DurationStringContext } from "./GQLParser.js";
import { NodeSynonymContext } from "./GQLParser.js";
import { EdgesSynonymContext } from "./GQLParser.js";
import { EdgeSynonymContext } from "./GQLParser.js";
import { NonReservedWordsContext } from "./GQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GQLParser.gqlProgram`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGqlProgram?: (ctx: GqlProgramContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.programActivity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgramActivity?: (ctx: ProgramActivityContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionActivity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionActivity?: (ctx: SessionActivityContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.transactionActivity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionActivity?: (ctx: TransactionActivityContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endTransactionCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndTransactionCommand?: (ctx: EndTransactionCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetCommand?: (ctx: SessionSetCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetSchemaClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetSchemaClause?: (ctx: SessionSetSchemaClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetGraphClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetGraphClause?: (ctx: SessionSetGraphClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetTimeZoneClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetTimeZoneClause?: (ctx: SessionSetTimeZoneClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setTimeZoneValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneValue?: (ctx: SetTimeZoneValueContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetParameterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetParameterClause?: (ctx: SessionSetParameterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetGraphParameterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetGraphParameterClause?: (ctx: SessionSetGraphParameterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetBindingTableParameterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetBindingTableParameterClause?: (ctx: SessionSetBindingTableParameterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetValueParameterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetValueParameterClause?: (ctx: SessionSetValueParameterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionSetParameterName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionSetParameterName?: (ctx: SessionSetParameterNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionResetCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionResetCommand?: (ctx: SessionResetCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionResetArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionResetArguments?: (ctx: SessionResetArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionCloseCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionCloseCommand?: (ctx: SessionCloseCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sessionParameterSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionParameterSpecification?: (ctx: SessionParameterSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.startTransactionCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartTransactionCommand?: (ctx: StartTransactionCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.transactionCharacteristics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.transactionMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionMode?: (ctx: TransactionModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.transactionAccessMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.rollbackCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollbackCommand?: (ctx: RollbackCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.commitCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommitCommand?: (ctx: CommitCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nestedProcedureSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedProcedureSpecification?: (ctx: NestedProcedureSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureSpecification?: (ctx: ProcedureSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedDataModifyingProcedureSpecification?: (ctx: NestedDataModifyingProcedureSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nestedQuerySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedQuerySpecification?: (ctx: NestedQuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureBody?: (ctx: ProcedureBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingVariableDefinitionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingVariableDefinitionBlock?: (ctx: BindingVariableDefinitionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingVariableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingVariableDefinition?: (ctx: BindingVariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.statementBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementBlock?: (ctx: StatementBlockContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nextStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNextStatement?: (ctx: NextStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphVariableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphVariableDefinition?: (ctx: GraphVariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.optTypedGraphInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTypedGraphInitializer?: (ctx: OptTypedGraphInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphInitializer?: (ctx: GraphInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableVariableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableVariableDefinition?: (ctx: BindingTableVariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.optTypedBindingTableInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTypedBindingTableInitializer?: (ctx: OptTypedBindingTableInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableInitializer?: (ctx: BindingTableInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueVariableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueVariableDefinition?: (ctx: ValueVariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.optTypedValueInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptTypedValueInitializer?: (ctx: OptTypedValueInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueInitializer?: (ctx: ValueInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphExpression?: (ctx: GraphExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.currentGraph`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentGraph?: (ctx: CurrentGraphContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableExpression?: (ctx: BindingTableExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nestedBindingTableQuerySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedBindingTableQuerySpecification?: (ctx: NestedBindingTableQuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.objectExpressionPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectExpressionPrimary?: (ctx: ObjectExpressionPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.linearCatalogModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinearCatalogModifyingStatement?: (ctx: LinearCatalogModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleCatalogModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCatalogModifyingStatement?: (ctx: SimpleCatalogModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.primitiveCatalogModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveCatalogModifyingStatement?: (ctx: PrimitiveCatalogModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.createSchemaStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSchemaStatement?: (ctx: CreateSchemaStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dropSchemaStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSchemaStatement?: (ctx: DropSchemaStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.createGraphStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateGraphStatement?: (ctx: CreateGraphStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.openGraphType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenGraphType?: (ctx: OpenGraphTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.ofGraphType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOfGraphType?: (ctx: OfGraphTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphTypeLikeGraph`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphTypeLikeGraph?: (ctx: GraphTypeLikeGraphContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphSource?: (ctx: GraphSourceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dropGraphStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropGraphStatement?: (ctx: DropGraphStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.createGraphTypeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateGraphTypeStatement?: (ctx: CreateGraphTypeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphTypeSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphTypeSource?: (ctx: GraphTypeSourceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.copyOfGraphType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyOfGraphType?: (ctx: CopyOfGraphTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dropGraphTypeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropGraphTypeStatement?: (ctx: DropGraphTypeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.callCatalogModifyingProcedureStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallCatalogModifyingProcedureStatement?: (ctx: CallCatalogModifyingProcedureStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.linearDataModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinearDataModifyingStatement?: (ctx: LinearDataModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedLinearDataModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedLinearDataModifyingStatement?: (ctx: FocusedLinearDataModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedLinearDataModifyingStatementBody?: (ctx: FocusedLinearDataModifyingStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedNestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedNestedDataModifyingProcedureSpecification?: (ctx: FocusedNestedDataModifyingProcedureSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.ambientLinearDataModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAmbientLinearDataModifyingStatement?: (ctx: AmbientLinearDataModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.ambientLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAmbientLinearDataModifyingStatementBody?: (ctx: AmbientLinearDataModifyingStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleLinearDataAccessingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleLinearDataAccessingStatement?: (ctx: SimpleLinearDataAccessingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleDataAccessingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDataAccessingStatement?: (ctx: SimpleDataAccessingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleDataModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDataModifyingStatement?: (ctx: SimpleDataModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.primitiveDataModifyingStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveDataModifyingStatement?: (ctx: PrimitiveDataModifyingStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetStatement?: (ctx: SetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetItemList?: (ctx: SetItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetItem?: (ctx: SetItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setPropertyItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetPropertyItem?: (ctx: SetPropertyItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setAllPropertiesItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAllPropertiesItem?: (ctx: SetAllPropertiesItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setLabelItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetLabelItem?: (ctx: SetLabelItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.removeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveStatement?: (ctx: RemoveStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.removeItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveItemList?: (ctx: RemoveItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.removeItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveItem?: (ctx: RemoveItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.removePropertyItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemovePropertyItem?: (ctx: RemovePropertyItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.removeLabelItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveLabelItem?: (ctx: RemoveLabelItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.deleteItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteItemList?: (ctx: DeleteItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.deleteItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteItem?: (ctx: DeleteItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.callDataModifyingProcedureStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallDataModifyingProcedureStatement?: (ctx: CallDataModifyingProcedureStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.compositeQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompositeQueryStatement?: (ctx: CompositeQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.compositeQueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompositeQueryExpression?: (ctx: CompositeQueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.queryConjunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryConjunction?: (ctx: QueryConjunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperator?: (ctx: SetOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.compositeQueryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompositeQueryPrimary?: (ctx: CompositeQueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.linearQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinearQueryStatement?: (ctx: LinearQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedLinearQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedLinearQueryStatement?: (ctx: FocusedLinearQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedLinearQueryStatementPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedLinearQueryStatementPart?: (ctx: FocusedLinearQueryStatementPartContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedLinearQueryAndPrimitiveResultStatementPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedLinearQueryAndPrimitiveResultStatementPart?: (ctx: FocusedLinearQueryAndPrimitiveResultStatementPartContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedPrimitiveResultStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedPrimitiveResultStatement?: (ctx: FocusedPrimitiveResultStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.focusedNestedQuerySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFocusedNestedQuerySpecification?: (ctx: FocusedNestedQuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.ambientLinearQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAmbientLinearQueryStatement?: (ctx: AmbientLinearQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleLinearQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleLinearQueryStatement?: (ctx: SimpleLinearQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleQueryStatement?: (ctx: SimpleQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.primitiveQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveQueryStatement?: (ctx: PrimitiveQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.matchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchStatement?: (ctx: MatchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleMatchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleMatchStatement?: (ctx: SimpleMatchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.optionalMatchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalMatchStatement?: (ctx: OptionalMatchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.optionalOperand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalOperand?: (ctx: OptionalOperandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.matchStatementBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchStatementBlock?: (ctx: MatchStatementBlockContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.callQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallQueryStatement?: (ctx: CallQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.filterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilterStatement?: (ctx: FilterStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.letStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.letVariableDefinitionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetVariableDefinitionList?: (ctx: LetVariableDefinitionListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.letVariableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetVariableDefinition?: (ctx: LetVariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.forStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.forItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForItem?: (ctx: ForItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.forItemAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForItemAlias?: (ctx: ForItemAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.forItemSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForItemSource?: (ctx: ForItemSourceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.forOrdinalityOrOffset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForOrdinalityOrOffset?: (ctx: ForOrdinalityOrOffsetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.orderByAndPageStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByAndPageStatement?: (ctx: OrderByAndPageStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.primitiveResultStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveResultStatement?: (ctx: PrimitiveResultStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.returnStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatementBody?: (ctx: ReturnStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.returnItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnItemList?: (ctx: ReturnItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.returnItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnItem?: (ctx: ReturnItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.returnItemAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnItemAlias?: (ctx: ReturnItemAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItemList?: (ctx: SelectItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItem?: (ctx: SelectItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectItemAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectItemAlias?: (ctx: SelectItemAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatementBody?: (ctx: SelectStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectGraphMatchList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectGraphMatchList?: (ctx: SelectGraphMatchListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectGraphMatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectGraphMatch?: (ctx: SelectGraphMatchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.selectQuerySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectQuerySpecification?: (ctx: SelectQuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.callProcedureStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallProcedureStatement?: (ctx: CallProcedureStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureCall?: (ctx: ProcedureCallContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.inlineProcedureCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineProcedureCall?: (ctx: InlineProcedureCallContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.variableScopeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableScopeClause?: (ctx: VariableScopeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingVariableReferenceList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingVariableReferenceList?: (ctx: BindingVariableReferenceListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.namedProcedureCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedProcedureCall?: (ctx: NamedProcedureCallContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureArgumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureArgumentList?: (ctx: ProcedureArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureArgument?: (ctx: ProcedureArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.atSchemaClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtSchemaClause?: (ctx: AtSchemaClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.useGraphClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseGraphClause?: (ctx: UseGraphClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternBindingTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternBindingTable?: (ctx: GraphPatternBindingTableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternYieldClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternYieldClause?: (ctx: GraphPatternYieldClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternYieldItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternYieldItemList?: (ctx: GraphPatternYieldItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternYieldItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternYieldItem?: (ctx: GraphPatternYieldItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPattern?: (ctx: GraphPatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.matchMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchMode?: (ctx: MatchModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.repeatableElementsMatchMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatableElementsMatchMode?: (ctx: RepeatableElementsMatchModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.differentEdgesMatchMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDifferentEdgesMatchMode?: (ctx: DifferentEdgesMatchModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementBindingsOrElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementBindingsOrElements?: (ctx: ElementBindingsOrElementsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeBindingsOrEdges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeBindingsOrEdges?: (ctx: EdgeBindingsOrEdgesContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathPatternList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPatternList?: (ctx: PathPatternListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPattern?: (ctx: PathPatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathVariableDeclaration?: (ctx: PathVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.keepClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeepClause?: (ctx: KeepClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternWhereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternWhereClause?: (ctx: GraphPatternWhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertGraphPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertGraphPattern?: (ctx: InsertGraphPatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertPathPatternList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertPathPatternList?: (ctx: InsertPathPatternListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertPathPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertPathPattern?: (ctx: InsertPathPatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertNodePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertNodePattern?: (ctx: InsertNodePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertEdgePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertEdgePattern?: (ctx: InsertEdgePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertEdgePointingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertEdgePointingLeft?: (ctx: InsertEdgePointingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertEdgePointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertEdgePointingRight?: (ctx: InsertEdgePointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertEdgeUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertEdgeUndirected?: (ctx: InsertEdgeUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.insertElementPatternFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertElementPatternFiller?: (ctx: InsertElementPatternFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labelAndPropertySetSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelAndPropertySetSpecification?: (ctx: LabelAndPropertySetSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathPatternPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPatternPrefix?: (ctx: PathPatternPrefixContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathModePrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathModePrefix?: (ctx: PathModePrefixContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathMode?: (ctx: PathModeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathSearchPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathSearchPrefix?: (ctx: PathSearchPrefixContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.allPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllPathSearch?: (ctx: AllPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathOrPaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathOrPaths?: (ctx: PathOrPathsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.anyPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyPathSearch?: (ctx: AnyPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numberOfPaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberOfPaths?: (ctx: NumberOfPathsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.shortestPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShortestPathSearch?: (ctx: ShortestPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.allShortestPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAllShortestPathSearch?: (ctx: AllShortestPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.anyShortestPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyShortestPathSearch?: (ctx: AnyShortestPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.countedShortestPathSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountedShortestPathSearch?: (ctx: CountedShortestPathSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.countedShortestGroupSearch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountedShortestGroupSearch?: (ctx: CountedShortestGroupSearchContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numberOfGroups`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberOfGroups?: (ctx: NumberOfGroupsContext) => Result;
    /**
     * Visit a parse tree produced by the `ppePathTerm`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpePathTerm?: (ctx: PpePathTermContext) => Result;
    /**
     * Visit a parse tree produced by the `ppeMultisetAlternation`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpeMultisetAlternation?: (ctx: PpeMultisetAlternationContext) => Result;
    /**
     * Visit a parse tree produced by the `ppePatternUnion`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpePatternUnion?: (ctx: PpePatternUnionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathTerm?: (ctx: PathTermContext) => Result;
    /**
     * Visit a parse tree produced by the `pfPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPfPathPrimary?: (ctx: PfPathPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by the `pfQuantifiedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPfQuantifiedPathPrimary?: (ctx: PfQuantifiedPathPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by the `pfQuestionedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPfQuestionedPathPrimary?: (ctx: PfQuestionedPathPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by the `ppElementPattern`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpElementPattern?: (ctx: PpElementPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `ppParenthesizedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpParenthesizedPathPatternExpression?: (ctx: PpParenthesizedPathPatternExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ppSimplifiedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPpSimplifiedPathPatternExpression?: (ctx: PpSimplifiedPathPatternExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementPattern?: (ctx: ElementPatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodePattern?: (ctx: NodePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementPatternFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementPatternFiller?: (ctx: ElementPatternFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementVariableDeclaration?: (ctx: ElementVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.isLabelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsLabelExpression?: (ctx: IsLabelExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.isOrColon`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsOrColon?: (ctx: IsOrColonContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementPatternPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementPatternPredicate?: (ctx: ElementPatternPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementPatternWhereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementPatternWhereClause?: (ctx: ElementPatternWhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementPropertySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementPropertySpecification?: (ctx: ElementPropertySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyKeyValuePairList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKeyValuePairList?: (ctx: PropertyKeyValuePairListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyKeyValuePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKeyValuePair?: (ctx: PropertyKeyValuePairContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgePattern?: (ctx: EdgePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgePattern?: (ctx: FullEdgePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgePointingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgePointingLeft?: (ctx: FullEdgePointingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgeUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgeUndirected?: (ctx: FullEdgeUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgePointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgePointingRight?: (ctx: FullEdgePointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgeLeftOrUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgeLeftOrUndirected?: (ctx: FullEdgeLeftOrUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgeUndirectedOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgeUndirectedOrRight?: (ctx: FullEdgeUndirectedOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgeLeftOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgeLeftOrRight?: (ctx: FullEdgeLeftOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fullEdgeAnyDirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullEdgeAnyDirection?: (ctx: FullEdgeAnyDirectionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.abbreviatedEdgePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbbreviatedEdgePattern?: (ctx: AbbreviatedEdgePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.parenthesizedPathPatternExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedPathPatternExpression?: (ctx: ParenthesizedPathPatternExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.subpathVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpathVariableDeclaration?: (ctx: SubpathVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.parenthesizedPathPatternWhereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedPathPatternWhereClause?: (ctx: ParenthesizedPathPatternWhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionNegation`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionNegation?: (ctx: LabelExpressionNegationContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionName`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionName?: (ctx: LabelExpressionNameContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionWildcard`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionWildcard?: (ctx: LabelExpressionWildcardContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionParenthesized`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionParenthesized?: (ctx: LabelExpressionParenthesizedContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionConjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionConjunction?: (ctx: LabelExpressionConjunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `labelExpressionDisjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelExpressionDisjunction?: (ctx: LabelExpressionDisjunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathVariableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathVariableReference?: (ctx: PathVariableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementVariableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementVariableReference?: (ctx: ElementVariableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphPatternQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphPatternQuantifier?: (ctx: GraphPatternQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fixedQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFixedQuantifier?: (ctx: FixedQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralQuantifier?: (ctx: GeneralQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.lowerBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLowerBound?: (ctx: LowerBoundContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.upperBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpperBound?: (ctx: UpperBoundContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedPathPatternExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedPathPatternExpression?: (ctx: SimplifiedPathPatternExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingLeft?: (ctx: SimplifiedDefaultingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingUndirected?: (ctx: SimplifiedDefaultingUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingRight?: (ctx: SimplifiedDefaultingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingLeftOrUndirected?: (ctx: SimplifiedDefaultingLeftOrUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingUndirectedOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingUndirectedOrRight?: (ctx: SimplifiedDefaultingUndirectedOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingLeftOrRight?: (ctx: SimplifiedDefaultingLeftOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDefaultingAnyDirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDefaultingAnyDirection?: (ctx: SimplifiedDefaultingAnyDirectionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedContents`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedContents?: (ctx: SimplifiedContentsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedPathUnion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedPathUnion?: (ctx: SimplifiedPathUnionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedMultisetAlternation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedMultisetAlternation?: (ctx: SimplifiedMultisetAlternationContext) => Result;
    /**
     * Visit a parse tree produced by the `simplifiedFactorLowLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedFactorLowLabel?: (ctx: SimplifiedFactorLowLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `simplifiedConcatenationLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedConcatenationLabel?: (ctx: SimplifiedConcatenationLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `simplifiedFactorHighLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedFactorHighLabel?: (ctx: SimplifiedFactorHighLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `simplifiedConjunctionLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedConjunctionLabel?: (ctx: SimplifiedConjunctionLabelContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedFactorHigh`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedFactorHigh?: (ctx: SimplifiedFactorHighContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedQuantified`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedQuantified?: (ctx: SimplifiedQuantifiedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedQuestioned`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedQuestioned?: (ctx: SimplifiedQuestionedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedTertiary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedTertiary?: (ctx: SimplifiedTertiaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedDirectionOverride`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedDirectionOverride?: (ctx: SimplifiedDirectionOverrideContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideLeft?: (ctx: SimplifiedOverrideLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideUndirected?: (ctx: SimplifiedOverrideUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideRight?: (ctx: SimplifiedOverrideRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideLeftOrUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideLeftOrUndirected?: (ctx: SimplifiedOverrideLeftOrUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideUndirectedOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideUndirectedOrRight?: (ctx: SimplifiedOverrideUndirectedOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideLeftOrRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideLeftOrRight?: (ctx: SimplifiedOverrideLeftOrRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedOverrideAnyDirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedOverrideAnyDirection?: (ctx: SimplifiedOverrideAnyDirectionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedSecondary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedSecondary?: (ctx: SimplifiedSecondaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedNegation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedNegation?: (ctx: SimplifiedNegationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simplifiedPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplifiedPrimary?: (ctx: SimplifiedPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.yieldClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYieldClause?: (ctx: YieldClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.yieldItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYieldItemList?: (ctx: YieldItemListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.yieldItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYieldItem?: (ctx: YieldItemContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.yieldItemName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYieldItemName?: (ctx: YieldItemNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.yieldItemAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYieldItemAlias?: (ctx: YieldItemAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.groupingElementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElementList?: (ctx: GroupingElementListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.emptyGroupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyGroupingSet?: (ctx: EmptyGroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sortSpecificationList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortSpecificationList?: (ctx: SortSpecificationListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sortSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortSpecification?: (ctx: SortSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sortKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortKey?: (ctx: SortKeyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.orderingSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderingSpecification?: (ctx: OrderingSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nullOrdering`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullOrdering?: (ctx: NullOrderingContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.offsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffsetClause?: (ctx: OffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.offsetSynonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffsetSynonym?: (ctx: OffsetSynonymContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.schemaReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaReference?: (ctx: SchemaReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.absoluteCatalogSchemaReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbsoluteCatalogSchemaReference?: (ctx: AbsoluteCatalogSchemaReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.catalogSchemaParentAndName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogSchemaParentAndName?: (ctx: CatalogSchemaParentAndNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.relativeCatalogSchemaReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelativeCatalogSchemaReference?: (ctx: RelativeCatalogSchemaReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.predefinedSchemaReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredefinedSchemaReference?: (ctx: PredefinedSchemaReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.absoluteDirectoryPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbsoluteDirectoryPath?: (ctx: AbsoluteDirectoryPathContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.relativeDirectoryPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelativeDirectoryPath?: (ctx: RelativeDirectoryPathContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleDirectoryPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDirectoryPath?: (ctx: SimpleDirectoryPathContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphReference?: (ctx: GraphReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.catalogGraphParentAndName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogGraphParentAndName?: (ctx: CatalogGraphParentAndNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.homeGraph`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHomeGraph?: (ctx: HomeGraphContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphTypeReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphTypeReference?: (ctx: GraphTypeReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.catalogGraphTypeParentAndName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogGraphTypeParentAndName?: (ctx: CatalogGraphTypeParentAndNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableReference?: (ctx: BindingTableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureReference?: (ctx: ProcedureReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.catalogProcedureParentAndName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogProcedureParentAndName?: (ctx: CatalogProcedureParentAndNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.catalogObjectParentReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogObjectParentReference?: (ctx: CatalogObjectParentReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.referenceParameterSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceParameterSpecification?: (ctx: ReferenceParameterSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nestedGraphTypeSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedGraphTypeSpecification?: (ctx: NestedGraphTypeSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphTypeSpecificationBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphTypeSpecificationBody?: (ctx: GraphTypeSpecificationBodyContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementTypeList?: (ctx: ElementTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementTypeSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementTypeSpecification?: (ctx: ElementTypeSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeSpecification?: (ctx: NodeTypeSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypePattern?: (ctx: NodeTypePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypePhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypePhrase?: (ctx: NodeTypePhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypePhraseFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypePhraseFiller?: (ctx: NodeTypePhraseFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeFiller?: (ctx: NodeTypeFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.localNodeTypeAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalNodeTypeAlias?: (ctx: LocalNodeTypeAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeImpliedContent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeImpliedContent?: (ctx: NodeTypeImpliedContentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeKeyLabelSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeKeyLabelSet?: (ctx: NodeTypeKeyLabelSetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeLabelSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeLabelSet?: (ctx: NodeTypeLabelSetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypePropertyTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypePropertyTypes?: (ctx: NodeTypePropertyTypesContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeSpecification?: (ctx: EdgeTypeSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePattern?: (ctx: EdgeTypePatternContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePhrase?: (ctx: EdgeTypePhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePhraseFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePhraseFiller?: (ctx: EdgeTypePhraseFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeFiller`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeFiller?: (ctx: EdgeTypeFillerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeImpliedContent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeImpliedContent?: (ctx: EdgeTypeImpliedContentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeKeyLabelSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeKeyLabelSet?: (ctx: EdgeTypeKeyLabelSetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeLabelSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeLabelSet?: (ctx: EdgeTypeLabelSetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePropertyTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePropertyTypes?: (ctx: EdgeTypePropertyTypesContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePatternDirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePatternDirected?: (ctx: EdgeTypePatternDirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePatternPointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePatternPointingRight?: (ctx: EdgeTypePatternPointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePatternPointingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePatternPointingLeft?: (ctx: EdgeTypePatternPointingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypePatternUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypePatternUndirected?: (ctx: EdgeTypePatternUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.arcTypePointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArcTypePointingRight?: (ctx: ArcTypePointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.arcTypePointingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArcTypePointingLeft?: (ctx: ArcTypePointingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.arcTypeUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArcTypeUndirected?: (ctx: ArcTypeUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sourceNodeTypeReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceNodeTypeReference?: (ctx: SourceNodeTypeReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.destinationNodeTypeReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDestinationNodeTypeReference?: (ctx: DestinationNodeTypeReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeKind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeKind?: (ctx: EdgeKindContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPairPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPairPhrase?: (ctx: EndpointPairPhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPair?: (ctx: EndpointPairContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPairDirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPairDirected?: (ctx: EndpointPairDirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPairPointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPairPointingRight?: (ctx: EndpointPairPointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPairPointingLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPairPointingLeft?: (ctx: EndpointPairPointingLeftContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.endpointPairUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndpointPairUndirected?: (ctx: EndpointPairUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.connectorPointingRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorPointingRight?: (ctx: ConnectorPointingRightContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.connectorUndirected`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorUndirected?: (ctx: ConnectorUndirectedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sourceNodeTypeAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceNodeTypeAlias?: (ctx: SourceNodeTypeAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.destinationNodeTypeAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDestinationNodeTypeAlias?: (ctx: DestinationNodeTypeAliasContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labelSetPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelSetPhrase?: (ctx: LabelSetPhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labelSetSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelSetSpecification?: (ctx: LabelSetSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyTypesSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyTypesSpecification?: (ctx: PropertyTypesSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyTypeList?: (ctx: PropertyTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyType?: (ctx: PropertyTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValueType?: (ctx: PropertyValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableType?: (ctx: BindingTableTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `predefinedTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredefinedTypeLabel?: (ctx: PredefinedTypeLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `pathValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathValueTypeLabel?: (ctx: PathValueTypeLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `listValueTypeAlt1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueTypeAlt1?: (ctx: ListValueTypeAlt1Context) => Result;
    /**
     * Visit a parse tree produced by the `listValueTypeAlt3`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueTypeAlt3?: (ctx: ListValueTypeAlt3Context) => Result;
    /**
     * Visit a parse tree produced by the `recordTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordTypeLabel?: (ctx: RecordTypeLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `openDynamicUnionTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenDynamicUnionTypeLabel?: (ctx: OpenDynamicUnionTypeLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `dynamicPropertyValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamicPropertyValueTypeLabel?: (ctx: DynamicPropertyValueTypeLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `closedDynamicUnionTypeAtl1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedDynamicUnionTypeAtl1?: (ctx: ClosedDynamicUnionTypeAtl1Context) => Result;
    /**
     * Visit a parse tree produced by the `closedDynamicUnionTypeAtl2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedDynamicUnionTypeAtl2?: (ctx: ClosedDynamicUnionTypeAtl2Context) => Result;
    /**
     * Visit a parse tree produced by the `listValueTypeAlt2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueTypeAlt2?: (ctx: ListValueTypeAlt2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.typed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTyped?: (ctx: TypedContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.predefinedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredefinedType?: (ctx: PredefinedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.booleanType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanType?: (ctx: BooleanTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.characterStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacterStringType?: (ctx: CharacterStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.byteStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitByteStringType?: (ctx: ByteStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.minLength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMinLength?: (ctx: MinLengthContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.maxLength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaxLength?: (ctx: MaxLengthContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fixedLength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFixedLength?: (ctx: FixedLengthContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericType?: (ctx: NumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.exactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExactNumericType?: (ctx: ExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.binaryExactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryExactNumericType?: (ctx: BinaryExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.signedBinaryExactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignedBinaryExactNumericType?: (ctx: SignedBinaryExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedBinaryExactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedBinaryExactNumericType?: (ctx: UnsignedBinaryExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.verboseBinaryExactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerboseBinaryExactNumericType?: (ctx: VerboseBinaryExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.decimalExactNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalExactNumericType?: (ctx: DecimalExactNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.precision`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecision?: (ctx: PrecisionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.scale`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScale?: (ctx: ScaleContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.approximateNumericType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApproximateNumericType?: (ctx: ApproximateNumericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.temporalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalType?: (ctx: TemporalTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.temporalInstantType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalInstantType?: (ctx: TemporalInstantTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeType?: (ctx: DatetimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.localdatetimeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocaldatetimeType?: (ctx: LocaldatetimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dateType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateType?: (ctx: DateTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeType?: (ctx: TimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.localtimeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocaltimeType?: (ctx: LocaltimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.temporalDurationType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalDurationType?: (ctx: TemporalDurationTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.temporalDurationQualifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalDurationQualifier?: (ctx: TemporalDurationQualifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.referenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceValueType?: (ctx: ReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.immaterialValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImmaterialValueType?: (ctx: ImmaterialValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nullType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullType?: (ctx: NullTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.emptyType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyType?: (ctx: EmptyTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphReferenceValueType?: (ctx: GraphReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.closedGraphReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedGraphReferenceValueType?: (ctx: ClosedGraphReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.openGraphReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenGraphReferenceValueType?: (ctx: OpenGraphReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableReferenceValueType?: (ctx: BindingTableReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeReferenceValueType?: (ctx: NodeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.closedNodeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedNodeReferenceValueType?: (ctx: ClosedNodeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.openNodeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenNodeReferenceValueType?: (ctx: OpenNodeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeReferenceValueType?: (ctx: EdgeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.closedEdgeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosedEdgeReferenceValueType?: (ctx: ClosedEdgeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.openEdgeReferenceValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenEdgeReferenceValueType?: (ctx: OpenEdgeReferenceValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathValueType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathValueType?: (ctx: PathValueTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueTypeName?: (ctx: ListValueTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueTypeNameSynonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueTypeNameSynonym?: (ctx: ListValueTypeNameSynonymContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.recordType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordType?: (ctx: RecordTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldTypesSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldTypesSpecification?: (ctx: FieldTypesSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldTypeList?: (ctx: FieldTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.notNull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotNull?: (ctx: NotNullContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldType?: (ctx: FieldTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.searchCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchCondition?: (ctx: SearchConditionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.compOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompOp?: (ctx: CompOpContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.existsPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistsPredicate?: (ctx: ExistsPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nullPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullPredicate?: (ctx: NullPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nullPredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullPredicatePart2?: (ctx: NullPredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueTypePredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueTypePredicate?: (ctx: ValueTypePredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueTypePredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueTypePredicatePart2?: (ctx: ValueTypePredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.normalizedPredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalizedPredicatePart2?: (ctx: NormalizedPredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.directedPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectedPredicate?: (ctx: DirectedPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.directedPredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectedPredicatePart2?: (ctx: DirectedPredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labeledPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabeledPredicate?: (ctx: LabeledPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labeledPredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabeledPredicatePart2?: (ctx: LabeledPredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.isLabeledOrColon`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsLabeledOrColon?: (ctx: IsLabeledOrColonContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sourceDestinationPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceDestinationPredicate?: (ctx: SourceDestinationPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeReference?: (ctx: NodeReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.sourcePredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourcePredicatePart2?: (ctx: SourcePredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.destinationPredicatePart2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDestinationPredicatePart2?: (ctx: DestinationPredicatePart2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeReference?: (ctx: EdgeReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.all_differentPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_differentPredicate?: (ctx: All_differentPredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.samePredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSamePredicate?: (ctx: SamePredicateContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.property_existsPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_existsPredicate?: (ctx: Property_existsPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `signedExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignedExprAlt?: (ctx: SignedExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `predicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateExprAlt?: (ctx: PredicateExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `notExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExprAlt?: (ctx: NotExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `propertyGraphExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyGraphExprAlt?: (ctx: PropertyGraphExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `bindingTableExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableExprAlt?: (ctx: BindingTableExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `valueFunctionExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueFunctionExprAlt?: (ctx: ValueFunctionExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `primaryExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExprAlt?: (ctx: PrimaryExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `multDivExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultDivExprAlt?: (ctx: MultDivExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `addSubtractExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubtractExprAlt?: (ctx: AddSubtractExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenationExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenationExprAlt?: (ctx: ConcatenationExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `comparisonExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonExprAlt?: (ctx: ComparisonExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `conjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConjunctiveExprAlt?: (ctx: ConjunctiveExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `disjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisjunctiveExprAlt?: (ctx: DisjunctiveExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `normalizedPredicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalizedPredicateExprAlt?: (ctx: NormalizedPredicateExprAltContext) => Result;
    /**
     * Visit a parse tree produced by the `isNotExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsNotExprAlt?: (ctx: IsNotExprAltContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueFunction?: (ctx: ValueFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.booleanValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValueExpression?: (ctx: BooleanValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.characterOrByteStringFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacterOrByteStringFunction?: (ctx: CharacterOrByteStringFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.subCharacterOrByteString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubCharacterOrByteString?: (ctx: SubCharacterOrByteStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimSingleCharacterOrByteString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimSingleCharacterOrByteString?: (ctx: TrimSingleCharacterOrByteStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.foldCharacterString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFoldCharacterString?: (ctx: FoldCharacterStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimMultiCharacterCharacterString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimMultiCharacterCharacterString?: (ctx: TrimMultiCharacterCharacterStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.normalizeCharacterString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalizeCharacterString?: (ctx: NormalizeCharacterStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeReferenceValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeReferenceValueExpression?: (ctx: NodeReferenceValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeReferenceValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeReferenceValueExpression?: (ctx: EdgeReferenceValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.aggregatingValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregatingValueExpression?: (ctx: AggregatingValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueExpressionPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionPrimary?: (ctx: ValueExpressionPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.parenthesizedValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedValueExpression?: (ctx: ParenthesizedValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonParenthesizedValueExpressionPrimary?: (ctx: NonParenthesizedValueExpressionPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimarySpecialCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonParenthesizedValueExpressionPrimarySpecialCase?: (ctx: NonParenthesizedValueExpressionPrimarySpecialCaseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedValueSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedValueSpecification?: (ctx: UnsignedValueSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nonNegativeIntegerSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonNegativeIntegerSpecification?: (ctx: NonNegativeIntegerSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalValueSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralValueSpecification?: (ctx: GeneralValueSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dynamicParameterSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDynamicParameterSpecification?: (ctx: DynamicParameterSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.letValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetValueExpression?: (ctx: LetValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.valueQueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueQueryExpression?: (ctx: ValueQueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.caseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseExpression?: (ctx: CaseExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.caseAbbreviation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseAbbreviation?: (ctx: CaseAbbreviationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.caseSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseSpecification?: (ctx: CaseSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.searchedCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.simpleWhenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleWhenClause?: (ctx: SimpleWhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.searchedWhenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedWhenClause?: (ctx: SearchedWhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseClause?: (ctx: ElseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.caseOperand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseOperand?: (ctx: CaseOperandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.whenOperandList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenOperandList?: (ctx: WhenOperandListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.whenOperand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenOperand?: (ctx: WhenOperandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.result`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResult?: (ctx: ResultContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.resultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResultExpression?: (ctx: ResultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.castSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastSpecification?: (ctx: CastSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.castOperand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastOperand?: (ctx: CastOperandContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.castTarget`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastTarget?: (ctx: CastTargetContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.aggregateFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateFunction?: (ctx: AggregateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalSetFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralSetFunction?: (ctx: GeneralSetFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.binarySetFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinarySetFunction?: (ctx: BinarySetFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalSetFunctionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralSetFunctionType?: (ctx: GeneralSetFunctionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.binarySetFunctionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinarySetFunctionType?: (ctx: BinarySetFunctionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dependentValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDependentValueExpression?: (ctx: DependentValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.independentValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndependentValueExpression?: (ctx: IndependentValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.element_idFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElement_idFunction?: (ctx: Element_idFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingVariableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingVariableReference?: (ctx: BindingVariableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathValueExpression?: (ctx: PathValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathValueConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathValueConstructor?: (ctx: PathValueConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathValueConstructorByEnumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathValueConstructorByEnumeration?: (ctx: PathValueConstructorByEnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathElementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathElementList?: (ctx: PathElementListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathElementListStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathElementListStart?: (ctx: PathElementListStartContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathElementListStep`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathElementListStep?: (ctx: PathElementListStepContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueExpression?: (ctx: ListValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueFunction?: (ctx: ListValueFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimListFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimListFunction?: (ctx: TrimListFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementsFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementsFunction?: (ctx: ElementsFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueConstructor?: (ctx: ListValueConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listValueConstructorByEnumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValueConstructorByEnumeration?: (ctx: ListValueConstructorByEnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listElementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListElementList?: (ctx: ListElementListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListElement?: (ctx: ListElementContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.recordConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordConstructor?: (ctx: RecordConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldsSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldsSpecification?: (ctx: FieldsSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldList?: (ctx: FieldListContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.truthValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruthValue?: (ctx: TruthValueContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueExpression?: (ctx: NumericValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueFunction?: (ctx: NumericValueFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.lengthExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthExpression?: (ctx: LengthExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.cardinalityExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCardinalityExpression?: (ctx: CardinalityExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.cardinalityExpressionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCardinalityExpressionArgument?: (ctx: CardinalityExpressionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.charLengthExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharLengthExpression?: (ctx: CharLengthExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.byteLengthExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitByteLengthExpression?: (ctx: ByteLengthExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathLengthExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathLengthExpression?: (ctx: PathLengthExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.absoluteValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbsoluteValueExpression?: (ctx: AbsoluteValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.modulusExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModulusExpression?: (ctx: ModulusExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueExpressionDividend`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueExpressionDividend?: (ctx: NumericValueExpressionDividendContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueExpressionDivisor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueExpressionDivisor?: (ctx: NumericValueExpressionDivisorContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trigonometricFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigonometricFunction?: (ctx: TrigonometricFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trigonometricFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigonometricFunctionName?: (ctx: TrigonometricFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalLogarithmFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralLogarithmFunction?: (ctx: GeneralLogarithmFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalLogarithmBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralLogarithmBase?: (ctx: GeneralLogarithmBaseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalLogarithmArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralLogarithmArgument?: (ctx: GeneralLogarithmArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.commonLogarithm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonLogarithm?: (ctx: CommonLogarithmContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.naturalLogarithm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaturalLogarithm?: (ctx: NaturalLogarithmContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.exponentialFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExponentialFunction?: (ctx: ExponentialFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.powerFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowerFunction?: (ctx: PowerFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueExpressionBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueExpressionBase?: (ctx: NumericValueExpressionBaseContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.numericValueExpressionExponent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValueExpressionExponent?: (ctx: NumericValueExpressionExponentContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.squareRoot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSquareRoot?: (ctx: SquareRootContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.floorFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloorFunction?: (ctx: FloorFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.ceilingFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCeilingFunction?: (ctx: CeilingFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.characterStringValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacterStringValueExpression?: (ctx: CharacterStringValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.byteStringValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitByteStringValueExpression?: (ctx: ByteStringValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimOperands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimOperands?: (ctx: TrimOperandsContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimCharacterOrByteStringSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimCharacterOrByteStringSource?: (ctx: TrimCharacterOrByteStringSourceContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimSpecification?: (ctx: TrimSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.trimCharacterOrByteString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimCharacterOrByteString?: (ctx: TrimCharacterOrByteStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.normalForm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalForm?: (ctx: NormalFormContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.stringLength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLength?: (ctx: StringLengthContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeValueExpression?: (ctx: DatetimeValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeValueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeValueFunction?: (ctx: DatetimeValueFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dateFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateFunction?: (ctx: DateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeFunction?: (ctx: TimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.localtimeFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocaltimeFunction?: (ctx: LocaltimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeFunction?: (ctx: DatetimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.localdatetimeFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocaldatetimeFunction?: (ctx: LocaldatetimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dateFunctionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateFunctionParameters?: (ctx: DateFunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeFunctionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeFunctionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeFunctionParameters?: (ctx: DatetimeFunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationValueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationValueExpression?: (ctx: DurationValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeSubtraction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeSubtraction?: (ctx: DatetimeSubtractionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeSubtractionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeSubtractionParameters?: (ctx: DatetimeSubtractionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeValueExpression1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeValueExpression1?: (ctx: DatetimeValueExpression1Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeValueExpression2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeValueExpression2?: (ctx: DatetimeValueExpression2Context) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationValueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationValueFunction?: (ctx: DurationValueFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationFunction?: (ctx: DurationFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationFunctionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationFunctionParameters?: (ctx: DurationFunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.objectName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectName?: (ctx: ObjectNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.objectNameOrBindingVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectNameOrBindingVariable?: (ctx: ObjectNameOrBindingVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.directoryName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectoryName?: (ctx: DirectoryNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.schemaName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaName?: (ctx: SchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphName?: (ctx: GraphNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.delimitedGraphName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelimitedGraphName?: (ctx: DelimitedGraphNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.graphTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGraphTypeName?: (ctx: GraphTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeTypeName?: (ctx: NodeTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeTypeName?: (ctx: EdgeTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingTableName?: (ctx: BindingTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.delimitedBindingTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelimitedBindingTableName?: (ctx: DelimitedBindingTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.procedureName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureName?: (ctx: ProcedureNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.labelName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelName?: (ctx: LabelNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.propertyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyName?: (ctx: PropertyNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.fieldName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldName?: (ctx: FieldNameContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.elementVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementVariable?: (ctx: ElementVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.pathVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathVariable?: (ctx: PathVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.subpathVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubpathVariable?: (ctx: SubpathVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.bindingVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBindingVariable?: (ctx: BindingVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedLiteral?: (ctx: UnsignedLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.generalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralLiteral?: (ctx: GeneralLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.temporalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalLiteral?: (ctx: TemporalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dateLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateLiteral?: (ctx: DateLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.listLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListLiteral?: (ctx: ListLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.recordLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordLiteral?: (ctx: RecordLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.regularIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegularIdentifier?: (ctx: RegularIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeZoneString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.characterStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacterStringLiteral?: (ctx: CharacterStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedNumericLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedNumericLiteral?: (ctx: UnsignedNumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.exactNumericLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExactNumericLiteral?: (ctx: ExactNumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.approximateNumericLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApproximateNumericLiteral?: (ctx: ApproximateNumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedInteger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedInteger?: (ctx: UnsignedIntegerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.unsignedDecimalInteger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsignedDecimalInteger?: (ctx: UnsignedDecimalIntegerContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nullLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.dateString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateString?: (ctx: DateStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.timeString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeString?: (ctx: TimeStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.datetimeString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeString?: (ctx: DatetimeStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationLiteral?: (ctx: DurationLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.durationString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDurationString?: (ctx: DurationStringContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nodeSynonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeSynonym?: (ctx: NodeSynonymContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgesSynonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgesSynonym?: (ctx: EdgesSynonymContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.edgeSynonym`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEdgeSynonym?: (ctx: EdgeSynonymContext) => Result;
    /**
     * Visit a parse tree produced by `GQLParser.nonReservedWords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedWords?: (ctx: NonReservedWordsContext) => Result;
}

