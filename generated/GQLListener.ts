
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `GQLParser`.
 */
export class GQLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `GQLParser.gqlProgram`.
     * @param ctx the parse tree
     */
    enterGqlProgram?: (ctx: GqlProgramContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.gqlProgram`.
     * @param ctx the parse tree
     */
    exitGqlProgram?: (ctx: GqlProgramContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.programActivity`.
     * @param ctx the parse tree
     */
    enterProgramActivity?: (ctx: ProgramActivityContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.programActivity`.
     * @param ctx the parse tree
     */
    exitProgramActivity?: (ctx: ProgramActivityContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionActivity`.
     * @param ctx the parse tree
     */
    enterSessionActivity?: (ctx: SessionActivityContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionActivity`.
     * @param ctx the parse tree
     */
    exitSessionActivity?: (ctx: SessionActivityContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.transactionActivity`.
     * @param ctx the parse tree
     */
    enterTransactionActivity?: (ctx: TransactionActivityContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.transactionActivity`.
     * @param ctx the parse tree
     */
    exitTransactionActivity?: (ctx: TransactionActivityContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endTransactionCommand`.
     * @param ctx the parse tree
     */
    enterEndTransactionCommand?: (ctx: EndTransactionCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endTransactionCommand`.
     * @param ctx the parse tree
     */
    exitEndTransactionCommand?: (ctx: EndTransactionCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetCommand`.
     * @param ctx the parse tree
     */
    enterSessionSetCommand?: (ctx: SessionSetCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetCommand`.
     * @param ctx the parse tree
     */
    exitSessionSetCommand?: (ctx: SessionSetCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetSchemaClause`.
     * @param ctx the parse tree
     */
    enterSessionSetSchemaClause?: (ctx: SessionSetSchemaClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetSchemaClause`.
     * @param ctx the parse tree
     */
    exitSessionSetSchemaClause?: (ctx: SessionSetSchemaClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetGraphClause`.
     * @param ctx the parse tree
     */
    enterSessionSetGraphClause?: (ctx: SessionSetGraphClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetGraphClause`.
     * @param ctx the parse tree
     */
    exitSessionSetGraphClause?: (ctx: SessionSetGraphClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetTimeZoneClause`.
     * @param ctx the parse tree
     */
    enterSessionSetTimeZoneClause?: (ctx: SessionSetTimeZoneClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetTimeZoneClause`.
     * @param ctx the parse tree
     */
    exitSessionSetTimeZoneClause?: (ctx: SessionSetTimeZoneClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setTimeZoneValue`.
     * @param ctx the parse tree
     */
    enterSetTimeZoneValue?: (ctx: SetTimeZoneValueContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setTimeZoneValue`.
     * @param ctx the parse tree
     */
    exitSetTimeZoneValue?: (ctx: SetTimeZoneValueContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetParameterClause`.
     * @param ctx the parse tree
     */
    enterSessionSetParameterClause?: (ctx: SessionSetParameterClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetParameterClause`.
     * @param ctx the parse tree
     */
    exitSessionSetParameterClause?: (ctx: SessionSetParameterClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetGraphParameterClause`.
     * @param ctx the parse tree
     */
    enterSessionSetGraphParameterClause?: (ctx: SessionSetGraphParameterClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetGraphParameterClause`.
     * @param ctx the parse tree
     */
    exitSessionSetGraphParameterClause?: (ctx: SessionSetGraphParameterClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetBindingTableParameterClause`.
     * @param ctx the parse tree
     */
    enterSessionSetBindingTableParameterClause?: (ctx: SessionSetBindingTableParameterClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetBindingTableParameterClause`.
     * @param ctx the parse tree
     */
    exitSessionSetBindingTableParameterClause?: (ctx: SessionSetBindingTableParameterClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetValueParameterClause`.
     * @param ctx the parse tree
     */
    enterSessionSetValueParameterClause?: (ctx: SessionSetValueParameterClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetValueParameterClause`.
     * @param ctx the parse tree
     */
    exitSessionSetValueParameterClause?: (ctx: SessionSetValueParameterClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionSetParameterName`.
     * @param ctx the parse tree
     */
    enterSessionSetParameterName?: (ctx: SessionSetParameterNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionSetParameterName`.
     * @param ctx the parse tree
     */
    exitSessionSetParameterName?: (ctx: SessionSetParameterNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionResetCommand`.
     * @param ctx the parse tree
     */
    enterSessionResetCommand?: (ctx: SessionResetCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionResetCommand`.
     * @param ctx the parse tree
     */
    exitSessionResetCommand?: (ctx: SessionResetCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionResetArguments`.
     * @param ctx the parse tree
     */
    enterSessionResetArguments?: (ctx: SessionResetArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionResetArguments`.
     * @param ctx the parse tree
     */
    exitSessionResetArguments?: (ctx: SessionResetArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionCloseCommand`.
     * @param ctx the parse tree
     */
    enterSessionCloseCommand?: (ctx: SessionCloseCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionCloseCommand`.
     * @param ctx the parse tree
     */
    exitSessionCloseCommand?: (ctx: SessionCloseCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sessionParameterSpecification`.
     * @param ctx the parse tree
     */
    enterSessionParameterSpecification?: (ctx: SessionParameterSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sessionParameterSpecification`.
     * @param ctx the parse tree
     */
    exitSessionParameterSpecification?: (ctx: SessionParameterSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.startTransactionCommand`.
     * @param ctx the parse tree
     */
    enterStartTransactionCommand?: (ctx: StartTransactionCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.startTransactionCommand`.
     * @param ctx the parse tree
     */
    exitStartTransactionCommand?: (ctx: StartTransactionCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.transactionCharacteristics`.
     * @param ctx the parse tree
     */
    enterTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.transactionCharacteristics`.
     * @param ctx the parse tree
     */
    exitTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.rollbackCommand`.
     * @param ctx the parse tree
     */
    enterRollbackCommand?: (ctx: RollbackCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.rollbackCommand`.
     * @param ctx the parse tree
     */
    exitRollbackCommand?: (ctx: RollbackCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.commitCommand`.
     * @param ctx the parse tree
     */
    enterCommitCommand?: (ctx: CommitCommandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.commitCommand`.
     * @param ctx the parse tree
     */
    exitCommitCommand?: (ctx: CommitCommandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nestedProcedureSpecification`.
     * @param ctx the parse tree
     */
    enterNestedProcedureSpecification?: (ctx: NestedProcedureSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nestedProcedureSpecification`.
     * @param ctx the parse tree
     */
    exitNestedProcedureSpecification?: (ctx: NestedProcedureSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureSpecification`.
     * @param ctx the parse tree
     */
    enterProcedureSpecification?: (ctx: ProcedureSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureSpecification`.
     * @param ctx the parse tree
     */
    exitProcedureSpecification?: (ctx: ProcedureSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     */
    enterNestedDataModifyingProcedureSpecification?: (ctx: NestedDataModifyingProcedureSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     */
    exitNestedDataModifyingProcedureSpecification?: (ctx: NestedDataModifyingProcedureSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nestedQuerySpecification`.
     * @param ctx the parse tree
     */
    enterNestedQuerySpecification?: (ctx: NestedQuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nestedQuerySpecification`.
     * @param ctx the parse tree
     */
    exitNestedQuerySpecification?: (ctx: NestedQuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureBody`.
     * @param ctx the parse tree
     */
    enterProcedureBody?: (ctx: ProcedureBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureBody`.
     * @param ctx the parse tree
     */
    exitProcedureBody?: (ctx: ProcedureBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingVariableDefinitionBlock`.
     * @param ctx the parse tree
     */
    enterBindingVariableDefinitionBlock?: (ctx: BindingVariableDefinitionBlockContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingVariableDefinitionBlock`.
     * @param ctx the parse tree
     */
    exitBindingVariableDefinitionBlock?: (ctx: BindingVariableDefinitionBlockContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingVariableDefinition`.
     * @param ctx the parse tree
     */
    enterBindingVariableDefinition?: (ctx: BindingVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingVariableDefinition`.
     * @param ctx the parse tree
     */
    exitBindingVariableDefinition?: (ctx: BindingVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.statementBlock`.
     * @param ctx the parse tree
     */
    enterStatementBlock?: (ctx: StatementBlockContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.statementBlock`.
     * @param ctx the parse tree
     */
    exitStatementBlock?: (ctx: StatementBlockContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nextStatement`.
     * @param ctx the parse tree
     */
    enterNextStatement?: (ctx: NextStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nextStatement`.
     * @param ctx the parse tree
     */
    exitNextStatement?: (ctx: NextStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphVariableDefinition`.
     * @param ctx the parse tree
     */
    enterGraphVariableDefinition?: (ctx: GraphVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphVariableDefinition`.
     * @param ctx the parse tree
     */
    exitGraphVariableDefinition?: (ctx: GraphVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.optTypedGraphInitializer`.
     * @param ctx the parse tree
     */
    enterOptTypedGraphInitializer?: (ctx: OptTypedGraphInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.optTypedGraphInitializer`.
     * @param ctx the parse tree
     */
    exitOptTypedGraphInitializer?: (ctx: OptTypedGraphInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphInitializer`.
     * @param ctx the parse tree
     */
    enterGraphInitializer?: (ctx: GraphInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphInitializer`.
     * @param ctx the parse tree
     */
    exitGraphInitializer?: (ctx: GraphInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableVariableDefinition`.
     * @param ctx the parse tree
     */
    enterBindingTableVariableDefinition?: (ctx: BindingTableVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableVariableDefinition`.
     * @param ctx the parse tree
     */
    exitBindingTableVariableDefinition?: (ctx: BindingTableVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.optTypedBindingTableInitializer`.
     * @param ctx the parse tree
     */
    enterOptTypedBindingTableInitializer?: (ctx: OptTypedBindingTableInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.optTypedBindingTableInitializer`.
     * @param ctx the parse tree
     */
    exitOptTypedBindingTableInitializer?: (ctx: OptTypedBindingTableInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableInitializer`.
     * @param ctx the parse tree
     */
    enterBindingTableInitializer?: (ctx: BindingTableInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableInitializer`.
     * @param ctx the parse tree
     */
    exitBindingTableInitializer?: (ctx: BindingTableInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueVariableDefinition`.
     * @param ctx the parse tree
     */
    enterValueVariableDefinition?: (ctx: ValueVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueVariableDefinition`.
     * @param ctx the parse tree
     */
    exitValueVariableDefinition?: (ctx: ValueVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.optTypedValueInitializer`.
     * @param ctx the parse tree
     */
    enterOptTypedValueInitializer?: (ctx: OptTypedValueInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.optTypedValueInitializer`.
     * @param ctx the parse tree
     */
    exitOptTypedValueInitializer?: (ctx: OptTypedValueInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueInitializer`.
     * @param ctx the parse tree
     */
    enterValueInitializer?: (ctx: ValueInitializerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueInitializer`.
     * @param ctx the parse tree
     */
    exitValueInitializer?: (ctx: ValueInitializerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphExpression`.
     * @param ctx the parse tree
     */
    enterGraphExpression?: (ctx: GraphExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphExpression`.
     * @param ctx the parse tree
     */
    exitGraphExpression?: (ctx: GraphExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.currentGraph`.
     * @param ctx the parse tree
     */
    enterCurrentGraph?: (ctx: CurrentGraphContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.currentGraph`.
     * @param ctx the parse tree
     */
    exitCurrentGraph?: (ctx: CurrentGraphContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableExpression`.
     * @param ctx the parse tree
     */
    enterBindingTableExpression?: (ctx: BindingTableExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableExpression`.
     * @param ctx the parse tree
     */
    exitBindingTableExpression?: (ctx: BindingTableExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nestedBindingTableQuerySpecification`.
     * @param ctx the parse tree
     */
    enterNestedBindingTableQuerySpecification?: (ctx: NestedBindingTableQuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nestedBindingTableQuerySpecification`.
     * @param ctx the parse tree
     */
    exitNestedBindingTableQuerySpecification?: (ctx: NestedBindingTableQuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.objectExpressionPrimary`.
     * @param ctx the parse tree
     */
    enterObjectExpressionPrimary?: (ctx: ObjectExpressionPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.objectExpressionPrimary`.
     * @param ctx the parse tree
     */
    exitObjectExpressionPrimary?: (ctx: ObjectExpressionPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.linearCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    enterLinearCatalogModifyingStatement?: (ctx: LinearCatalogModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.linearCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    exitLinearCatalogModifyingStatement?: (ctx: LinearCatalogModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    enterSimpleCatalogModifyingStatement?: (ctx: SimpleCatalogModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    exitSimpleCatalogModifyingStatement?: (ctx: SimpleCatalogModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.primitiveCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    enterPrimitiveCatalogModifyingStatement?: (ctx: PrimitiveCatalogModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.primitiveCatalogModifyingStatement`.
     * @param ctx the parse tree
     */
    exitPrimitiveCatalogModifyingStatement?: (ctx: PrimitiveCatalogModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.createSchemaStatement`.
     * @param ctx the parse tree
     */
    enterCreateSchemaStatement?: (ctx: CreateSchemaStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.createSchemaStatement`.
     * @param ctx the parse tree
     */
    exitCreateSchemaStatement?: (ctx: CreateSchemaStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dropSchemaStatement`.
     * @param ctx the parse tree
     */
    enterDropSchemaStatement?: (ctx: DropSchemaStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dropSchemaStatement`.
     * @param ctx the parse tree
     */
    exitDropSchemaStatement?: (ctx: DropSchemaStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.createGraphStatement`.
     * @param ctx the parse tree
     */
    enterCreateGraphStatement?: (ctx: CreateGraphStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.createGraphStatement`.
     * @param ctx the parse tree
     */
    exitCreateGraphStatement?: (ctx: CreateGraphStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.openGraphType`.
     * @param ctx the parse tree
     */
    enterOpenGraphType?: (ctx: OpenGraphTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.openGraphType`.
     * @param ctx the parse tree
     */
    exitOpenGraphType?: (ctx: OpenGraphTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.ofGraphType`.
     * @param ctx the parse tree
     */
    enterOfGraphType?: (ctx: OfGraphTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.ofGraphType`.
     * @param ctx the parse tree
     */
    exitOfGraphType?: (ctx: OfGraphTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphTypeLikeGraph`.
     * @param ctx the parse tree
     */
    enterGraphTypeLikeGraph?: (ctx: GraphTypeLikeGraphContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphTypeLikeGraph`.
     * @param ctx the parse tree
     */
    exitGraphTypeLikeGraph?: (ctx: GraphTypeLikeGraphContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphSource`.
     * @param ctx the parse tree
     */
    enterGraphSource?: (ctx: GraphSourceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphSource`.
     * @param ctx the parse tree
     */
    exitGraphSource?: (ctx: GraphSourceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dropGraphStatement`.
     * @param ctx the parse tree
     */
    enterDropGraphStatement?: (ctx: DropGraphStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dropGraphStatement`.
     * @param ctx the parse tree
     */
    exitDropGraphStatement?: (ctx: DropGraphStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.createGraphTypeStatement`.
     * @param ctx the parse tree
     */
    enterCreateGraphTypeStatement?: (ctx: CreateGraphTypeStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.createGraphTypeStatement`.
     * @param ctx the parse tree
     */
    exitCreateGraphTypeStatement?: (ctx: CreateGraphTypeStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphTypeSource`.
     * @param ctx the parse tree
     */
    enterGraphTypeSource?: (ctx: GraphTypeSourceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphTypeSource`.
     * @param ctx the parse tree
     */
    exitGraphTypeSource?: (ctx: GraphTypeSourceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.copyOfGraphType`.
     * @param ctx the parse tree
     */
    enterCopyOfGraphType?: (ctx: CopyOfGraphTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.copyOfGraphType`.
     * @param ctx the parse tree
     */
    exitCopyOfGraphType?: (ctx: CopyOfGraphTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dropGraphTypeStatement`.
     * @param ctx the parse tree
     */
    enterDropGraphTypeStatement?: (ctx: DropGraphTypeStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dropGraphTypeStatement`.
     * @param ctx the parse tree
     */
    exitDropGraphTypeStatement?: (ctx: DropGraphTypeStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.callCatalogModifyingProcedureStatement`.
     * @param ctx the parse tree
     */
    enterCallCatalogModifyingProcedureStatement?: (ctx: CallCatalogModifyingProcedureStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.callCatalogModifyingProcedureStatement`.
     * @param ctx the parse tree
     */
    exitCallCatalogModifyingProcedureStatement?: (ctx: CallCatalogModifyingProcedureStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.linearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    enterLinearDataModifyingStatement?: (ctx: LinearDataModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.linearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    exitLinearDataModifyingStatement?: (ctx: LinearDataModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedLinearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    enterFocusedLinearDataModifyingStatement?: (ctx: FocusedLinearDataModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedLinearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    exitFocusedLinearDataModifyingStatement?: (ctx: FocusedLinearDataModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     */
    enterFocusedLinearDataModifyingStatementBody?: (ctx: FocusedLinearDataModifyingStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     */
    exitFocusedLinearDataModifyingStatementBody?: (ctx: FocusedLinearDataModifyingStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedNestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     */
    enterFocusedNestedDataModifyingProcedureSpecification?: (ctx: FocusedNestedDataModifyingProcedureSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedNestedDataModifyingProcedureSpecification`.
     * @param ctx the parse tree
     */
    exitFocusedNestedDataModifyingProcedureSpecification?: (ctx: FocusedNestedDataModifyingProcedureSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.ambientLinearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    enterAmbientLinearDataModifyingStatement?: (ctx: AmbientLinearDataModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.ambientLinearDataModifyingStatement`.
     * @param ctx the parse tree
     */
    exitAmbientLinearDataModifyingStatement?: (ctx: AmbientLinearDataModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.ambientLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     */
    enterAmbientLinearDataModifyingStatementBody?: (ctx: AmbientLinearDataModifyingStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.ambientLinearDataModifyingStatementBody`.
     * @param ctx the parse tree
     */
    exitAmbientLinearDataModifyingStatementBody?: (ctx: AmbientLinearDataModifyingStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleLinearDataAccessingStatement`.
     * @param ctx the parse tree
     */
    enterSimpleLinearDataAccessingStatement?: (ctx: SimpleLinearDataAccessingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleLinearDataAccessingStatement`.
     * @param ctx the parse tree
     */
    exitSimpleLinearDataAccessingStatement?: (ctx: SimpleLinearDataAccessingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleDataAccessingStatement`.
     * @param ctx the parse tree
     */
    enterSimpleDataAccessingStatement?: (ctx: SimpleDataAccessingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleDataAccessingStatement`.
     * @param ctx the parse tree
     */
    exitSimpleDataAccessingStatement?: (ctx: SimpleDataAccessingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleDataModifyingStatement`.
     * @param ctx the parse tree
     */
    enterSimpleDataModifyingStatement?: (ctx: SimpleDataModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleDataModifyingStatement`.
     * @param ctx the parse tree
     */
    exitSimpleDataModifyingStatement?: (ctx: SimpleDataModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.primitiveDataModifyingStatement`.
     * @param ctx the parse tree
     */
    enterPrimitiveDataModifyingStatement?: (ctx: PrimitiveDataModifyingStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.primitiveDataModifyingStatement`.
     * @param ctx the parse tree
     */
    exitPrimitiveDataModifyingStatement?: (ctx: PrimitiveDataModifyingStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setItemList`.
     * @param ctx the parse tree
     */
    enterSetItemList?: (ctx: SetItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setItemList`.
     * @param ctx the parse tree
     */
    exitSetItemList?: (ctx: SetItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setItem`.
     * @param ctx the parse tree
     */
    enterSetItem?: (ctx: SetItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setItem`.
     * @param ctx the parse tree
     */
    exitSetItem?: (ctx: SetItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setPropertyItem`.
     * @param ctx the parse tree
     */
    enterSetPropertyItem?: (ctx: SetPropertyItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setPropertyItem`.
     * @param ctx the parse tree
     */
    exitSetPropertyItem?: (ctx: SetPropertyItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setAllPropertiesItem`.
     * @param ctx the parse tree
     */
    enterSetAllPropertiesItem?: (ctx: SetAllPropertiesItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setAllPropertiesItem`.
     * @param ctx the parse tree
     */
    exitSetAllPropertiesItem?: (ctx: SetAllPropertiesItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setLabelItem`.
     * @param ctx the parse tree
     */
    enterSetLabelItem?: (ctx: SetLabelItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setLabelItem`.
     * @param ctx the parse tree
     */
    exitSetLabelItem?: (ctx: SetLabelItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.removeStatement`.
     * @param ctx the parse tree
     */
    enterRemoveStatement?: (ctx: RemoveStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.removeStatement`.
     * @param ctx the parse tree
     */
    exitRemoveStatement?: (ctx: RemoveStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.removeItemList`.
     * @param ctx the parse tree
     */
    enterRemoveItemList?: (ctx: RemoveItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.removeItemList`.
     * @param ctx the parse tree
     */
    exitRemoveItemList?: (ctx: RemoveItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.removeItem`.
     * @param ctx the parse tree
     */
    enterRemoveItem?: (ctx: RemoveItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.removeItem`.
     * @param ctx the parse tree
     */
    exitRemoveItem?: (ctx: RemoveItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.removePropertyItem`.
     * @param ctx the parse tree
     */
    enterRemovePropertyItem?: (ctx: RemovePropertyItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.removePropertyItem`.
     * @param ctx the parse tree
     */
    exitRemovePropertyItem?: (ctx: RemovePropertyItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.removeLabelItem`.
     * @param ctx the parse tree
     */
    enterRemoveLabelItem?: (ctx: RemoveLabelItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.removeLabelItem`.
     * @param ctx the parse tree
     */
    exitRemoveLabelItem?: (ctx: RemoveLabelItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.deleteItemList`.
     * @param ctx the parse tree
     */
    enterDeleteItemList?: (ctx: DeleteItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.deleteItemList`.
     * @param ctx the parse tree
     */
    exitDeleteItemList?: (ctx: DeleteItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.deleteItem`.
     * @param ctx the parse tree
     */
    enterDeleteItem?: (ctx: DeleteItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.deleteItem`.
     * @param ctx the parse tree
     */
    exitDeleteItem?: (ctx: DeleteItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.callDataModifyingProcedureStatement`.
     * @param ctx the parse tree
     */
    enterCallDataModifyingProcedureStatement?: (ctx: CallDataModifyingProcedureStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.callDataModifyingProcedureStatement`.
     * @param ctx the parse tree
     */
    exitCallDataModifyingProcedureStatement?: (ctx: CallDataModifyingProcedureStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.compositeQueryStatement`.
     * @param ctx the parse tree
     */
    enterCompositeQueryStatement?: (ctx: CompositeQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.compositeQueryStatement`.
     * @param ctx the parse tree
     */
    exitCompositeQueryStatement?: (ctx: CompositeQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.compositeQueryExpression`.
     * @param ctx the parse tree
     */
    enterCompositeQueryExpression?: (ctx: CompositeQueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.compositeQueryExpression`.
     * @param ctx the parse tree
     */
    exitCompositeQueryExpression?: (ctx: CompositeQueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.queryConjunction`.
     * @param ctx the parse tree
     */
    enterQueryConjunction?: (ctx: QueryConjunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.queryConjunction`.
     * @param ctx the parse tree
     */
    exitQueryConjunction?: (ctx: QueryConjunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setOperator`.
     * @param ctx the parse tree
     */
    enterSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setOperator`.
     * @param ctx the parse tree
     */
    exitSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.compositeQueryPrimary`.
     * @param ctx the parse tree
     */
    enterCompositeQueryPrimary?: (ctx: CompositeQueryPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.compositeQueryPrimary`.
     * @param ctx the parse tree
     */
    exitCompositeQueryPrimary?: (ctx: CompositeQueryPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.linearQueryStatement`.
     * @param ctx the parse tree
     */
    enterLinearQueryStatement?: (ctx: LinearQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.linearQueryStatement`.
     * @param ctx the parse tree
     */
    exitLinearQueryStatement?: (ctx: LinearQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedLinearQueryStatement`.
     * @param ctx the parse tree
     */
    enterFocusedLinearQueryStatement?: (ctx: FocusedLinearQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedLinearQueryStatement`.
     * @param ctx the parse tree
     */
    exitFocusedLinearQueryStatement?: (ctx: FocusedLinearQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedLinearQueryStatementPart`.
     * @param ctx the parse tree
     */
    enterFocusedLinearQueryStatementPart?: (ctx: FocusedLinearQueryStatementPartContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedLinearQueryStatementPart`.
     * @param ctx the parse tree
     */
    exitFocusedLinearQueryStatementPart?: (ctx: FocusedLinearQueryStatementPartContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedLinearQueryAndPrimitiveResultStatementPart`.
     * @param ctx the parse tree
     */
    enterFocusedLinearQueryAndPrimitiveResultStatementPart?: (ctx: FocusedLinearQueryAndPrimitiveResultStatementPartContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedLinearQueryAndPrimitiveResultStatementPart`.
     * @param ctx the parse tree
     */
    exitFocusedLinearQueryAndPrimitiveResultStatementPart?: (ctx: FocusedLinearQueryAndPrimitiveResultStatementPartContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedPrimitiveResultStatement`.
     * @param ctx the parse tree
     */
    enterFocusedPrimitiveResultStatement?: (ctx: FocusedPrimitiveResultStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedPrimitiveResultStatement`.
     * @param ctx the parse tree
     */
    exitFocusedPrimitiveResultStatement?: (ctx: FocusedPrimitiveResultStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.focusedNestedQuerySpecification`.
     * @param ctx the parse tree
     */
    enterFocusedNestedQuerySpecification?: (ctx: FocusedNestedQuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.focusedNestedQuerySpecification`.
     * @param ctx the parse tree
     */
    exitFocusedNestedQuerySpecification?: (ctx: FocusedNestedQuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.ambientLinearQueryStatement`.
     * @param ctx the parse tree
     */
    enterAmbientLinearQueryStatement?: (ctx: AmbientLinearQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.ambientLinearQueryStatement`.
     * @param ctx the parse tree
     */
    exitAmbientLinearQueryStatement?: (ctx: AmbientLinearQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleLinearQueryStatement`.
     * @param ctx the parse tree
     */
    enterSimpleLinearQueryStatement?: (ctx: SimpleLinearQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleLinearQueryStatement`.
     * @param ctx the parse tree
     */
    exitSimpleLinearQueryStatement?: (ctx: SimpleLinearQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleQueryStatement`.
     * @param ctx the parse tree
     */
    enterSimpleQueryStatement?: (ctx: SimpleQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleQueryStatement`.
     * @param ctx the parse tree
     */
    exitSimpleQueryStatement?: (ctx: SimpleQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.primitiveQueryStatement`.
     * @param ctx the parse tree
     */
    enterPrimitiveQueryStatement?: (ctx: PrimitiveQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.primitiveQueryStatement`.
     * @param ctx the parse tree
     */
    exitPrimitiveQueryStatement?: (ctx: PrimitiveQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.matchStatement`.
     * @param ctx the parse tree
     */
    enterMatchStatement?: (ctx: MatchStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.matchStatement`.
     * @param ctx the parse tree
     */
    exitMatchStatement?: (ctx: MatchStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleMatchStatement`.
     * @param ctx the parse tree
     */
    enterSimpleMatchStatement?: (ctx: SimpleMatchStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleMatchStatement`.
     * @param ctx the parse tree
     */
    exitSimpleMatchStatement?: (ctx: SimpleMatchStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.optionalMatchStatement`.
     * @param ctx the parse tree
     */
    enterOptionalMatchStatement?: (ctx: OptionalMatchStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.optionalMatchStatement`.
     * @param ctx the parse tree
     */
    exitOptionalMatchStatement?: (ctx: OptionalMatchStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.optionalOperand`.
     * @param ctx the parse tree
     */
    enterOptionalOperand?: (ctx: OptionalOperandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.optionalOperand`.
     * @param ctx the parse tree
     */
    exitOptionalOperand?: (ctx: OptionalOperandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.matchStatementBlock`.
     * @param ctx the parse tree
     */
    enterMatchStatementBlock?: (ctx: MatchStatementBlockContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.matchStatementBlock`.
     * @param ctx the parse tree
     */
    exitMatchStatementBlock?: (ctx: MatchStatementBlockContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.callQueryStatement`.
     * @param ctx the parse tree
     */
    enterCallQueryStatement?: (ctx: CallQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.callQueryStatement`.
     * @param ctx the parse tree
     */
    exitCallQueryStatement?: (ctx: CallQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.filterStatement`.
     * @param ctx the parse tree
     */
    enterFilterStatement?: (ctx: FilterStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.filterStatement`.
     * @param ctx the parse tree
     */
    exitFilterStatement?: (ctx: FilterStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.letStatement`.
     * @param ctx the parse tree
     */
    enterLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.letStatement`.
     * @param ctx the parse tree
     */
    exitLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.letVariableDefinitionList`.
     * @param ctx the parse tree
     */
    enterLetVariableDefinitionList?: (ctx: LetVariableDefinitionListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.letVariableDefinitionList`.
     * @param ctx the parse tree
     */
    exitLetVariableDefinitionList?: (ctx: LetVariableDefinitionListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.letVariableDefinition`.
     * @param ctx the parse tree
     */
    enterLetVariableDefinition?: (ctx: LetVariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.letVariableDefinition`.
     * @param ctx the parse tree
     */
    exitLetVariableDefinition?: (ctx: LetVariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.forStatement`.
     * @param ctx the parse tree
     */
    enterForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.forStatement`.
     * @param ctx the parse tree
     */
    exitForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.forItem`.
     * @param ctx the parse tree
     */
    enterForItem?: (ctx: ForItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.forItem`.
     * @param ctx the parse tree
     */
    exitForItem?: (ctx: ForItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.forItemAlias`.
     * @param ctx the parse tree
     */
    enterForItemAlias?: (ctx: ForItemAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.forItemAlias`.
     * @param ctx the parse tree
     */
    exitForItemAlias?: (ctx: ForItemAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.forItemSource`.
     * @param ctx the parse tree
     */
    enterForItemSource?: (ctx: ForItemSourceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.forItemSource`.
     * @param ctx the parse tree
     */
    exitForItemSource?: (ctx: ForItemSourceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.forOrdinalityOrOffset`.
     * @param ctx the parse tree
     */
    enterForOrdinalityOrOffset?: (ctx: ForOrdinalityOrOffsetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.forOrdinalityOrOffset`.
     * @param ctx the parse tree
     */
    exitForOrdinalityOrOffset?: (ctx: ForOrdinalityOrOffsetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.orderByAndPageStatement`.
     * @param ctx the parse tree
     */
    enterOrderByAndPageStatement?: (ctx: OrderByAndPageStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.orderByAndPageStatement`.
     * @param ctx the parse tree
     */
    exitOrderByAndPageStatement?: (ctx: OrderByAndPageStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.primitiveResultStatement`.
     * @param ctx the parse tree
     */
    enterPrimitiveResultStatement?: (ctx: PrimitiveResultStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.primitiveResultStatement`.
     * @param ctx the parse tree
     */
    exitPrimitiveResultStatement?: (ctx: PrimitiveResultStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.returnStatementBody`.
     * @param ctx the parse tree
     */
    enterReturnStatementBody?: (ctx: ReturnStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.returnStatementBody`.
     * @param ctx the parse tree
     */
    exitReturnStatementBody?: (ctx: ReturnStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.returnItemList`.
     * @param ctx the parse tree
     */
    enterReturnItemList?: (ctx: ReturnItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.returnItemList`.
     * @param ctx the parse tree
     */
    exitReturnItemList?: (ctx: ReturnItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.returnItem`.
     * @param ctx the parse tree
     */
    enterReturnItem?: (ctx: ReturnItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.returnItem`.
     * @param ctx the parse tree
     */
    exitReturnItem?: (ctx: ReturnItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.returnItemAlias`.
     * @param ctx the parse tree
     */
    enterReturnItemAlias?: (ctx: ReturnItemAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.returnItemAlias`.
     * @param ctx the parse tree
     */
    exitReturnItemAlias?: (ctx: ReturnItemAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectItemList`.
     * @param ctx the parse tree
     */
    enterSelectItemList?: (ctx: SelectItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectItemList`.
     * @param ctx the parse tree
     */
    exitSelectItemList?: (ctx: SelectItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectItemAlias`.
     * @param ctx the parse tree
     */
    enterSelectItemAlias?: (ctx: SelectItemAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectItemAlias`.
     * @param ctx the parse tree
     */
    exitSelectItemAlias?: (ctx: SelectItemAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectStatementBody`.
     * @param ctx the parse tree
     */
    enterSelectStatementBody?: (ctx: SelectStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectStatementBody`.
     * @param ctx the parse tree
     */
    exitSelectStatementBody?: (ctx: SelectStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectGraphMatchList`.
     * @param ctx the parse tree
     */
    enterSelectGraphMatchList?: (ctx: SelectGraphMatchListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectGraphMatchList`.
     * @param ctx the parse tree
     */
    exitSelectGraphMatchList?: (ctx: SelectGraphMatchListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectGraphMatch`.
     * @param ctx the parse tree
     */
    enterSelectGraphMatch?: (ctx: SelectGraphMatchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectGraphMatch`.
     * @param ctx the parse tree
     */
    exitSelectGraphMatch?: (ctx: SelectGraphMatchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.selectQuerySpecification`.
     * @param ctx the parse tree
     */
    enterSelectQuerySpecification?: (ctx: SelectQuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.selectQuerySpecification`.
     * @param ctx the parse tree
     */
    exitSelectQuerySpecification?: (ctx: SelectQuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.callProcedureStatement`.
     * @param ctx the parse tree
     */
    enterCallProcedureStatement?: (ctx: CallProcedureStatementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.callProcedureStatement`.
     * @param ctx the parse tree
     */
    exitCallProcedureStatement?: (ctx: CallProcedureStatementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureCall`.
     * @param ctx the parse tree
     */
    enterProcedureCall?: (ctx: ProcedureCallContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureCall`.
     * @param ctx the parse tree
     */
    exitProcedureCall?: (ctx: ProcedureCallContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.inlineProcedureCall`.
     * @param ctx the parse tree
     */
    enterInlineProcedureCall?: (ctx: InlineProcedureCallContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.inlineProcedureCall`.
     * @param ctx the parse tree
     */
    exitInlineProcedureCall?: (ctx: InlineProcedureCallContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.variableScopeClause`.
     * @param ctx the parse tree
     */
    enterVariableScopeClause?: (ctx: VariableScopeClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.variableScopeClause`.
     * @param ctx the parse tree
     */
    exitVariableScopeClause?: (ctx: VariableScopeClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingVariableReferenceList`.
     * @param ctx the parse tree
     */
    enterBindingVariableReferenceList?: (ctx: BindingVariableReferenceListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingVariableReferenceList`.
     * @param ctx the parse tree
     */
    exitBindingVariableReferenceList?: (ctx: BindingVariableReferenceListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.namedProcedureCall`.
     * @param ctx the parse tree
     */
    enterNamedProcedureCall?: (ctx: NamedProcedureCallContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.namedProcedureCall`.
     * @param ctx the parse tree
     */
    exitNamedProcedureCall?: (ctx: NamedProcedureCallContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureArgumentList`.
     * @param ctx the parse tree
     */
    enterProcedureArgumentList?: (ctx: ProcedureArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureArgumentList`.
     * @param ctx the parse tree
     */
    exitProcedureArgumentList?: (ctx: ProcedureArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureArgument`.
     * @param ctx the parse tree
     */
    enterProcedureArgument?: (ctx: ProcedureArgumentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureArgument`.
     * @param ctx the parse tree
     */
    exitProcedureArgument?: (ctx: ProcedureArgumentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.atSchemaClause`.
     * @param ctx the parse tree
     */
    enterAtSchemaClause?: (ctx: AtSchemaClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.atSchemaClause`.
     * @param ctx the parse tree
     */
    exitAtSchemaClause?: (ctx: AtSchemaClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.useGraphClause`.
     * @param ctx the parse tree
     */
    enterUseGraphClause?: (ctx: UseGraphClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.useGraphClause`.
     * @param ctx the parse tree
     */
    exitUseGraphClause?: (ctx: UseGraphClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternBindingTable`.
     * @param ctx the parse tree
     */
    enterGraphPatternBindingTable?: (ctx: GraphPatternBindingTableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternBindingTable`.
     * @param ctx the parse tree
     */
    exitGraphPatternBindingTable?: (ctx: GraphPatternBindingTableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternYieldClause`.
     * @param ctx the parse tree
     */
    enterGraphPatternYieldClause?: (ctx: GraphPatternYieldClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternYieldClause`.
     * @param ctx the parse tree
     */
    exitGraphPatternYieldClause?: (ctx: GraphPatternYieldClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternYieldItemList`.
     * @param ctx the parse tree
     */
    enterGraphPatternYieldItemList?: (ctx: GraphPatternYieldItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternYieldItemList`.
     * @param ctx the parse tree
     */
    exitGraphPatternYieldItemList?: (ctx: GraphPatternYieldItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternYieldItem`.
     * @param ctx the parse tree
     */
    enterGraphPatternYieldItem?: (ctx: GraphPatternYieldItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternYieldItem`.
     * @param ctx the parse tree
     */
    exitGraphPatternYieldItem?: (ctx: GraphPatternYieldItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPattern`.
     * @param ctx the parse tree
     */
    enterGraphPattern?: (ctx: GraphPatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPattern`.
     * @param ctx the parse tree
     */
    exitGraphPattern?: (ctx: GraphPatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.matchMode`.
     * @param ctx the parse tree
     */
    enterMatchMode?: (ctx: MatchModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.matchMode`.
     * @param ctx the parse tree
     */
    exitMatchMode?: (ctx: MatchModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.repeatableElementsMatchMode`.
     * @param ctx the parse tree
     */
    enterRepeatableElementsMatchMode?: (ctx: RepeatableElementsMatchModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.repeatableElementsMatchMode`.
     * @param ctx the parse tree
     */
    exitRepeatableElementsMatchMode?: (ctx: RepeatableElementsMatchModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.differentEdgesMatchMode`.
     * @param ctx the parse tree
     */
    enterDifferentEdgesMatchMode?: (ctx: DifferentEdgesMatchModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.differentEdgesMatchMode`.
     * @param ctx the parse tree
     */
    exitDifferentEdgesMatchMode?: (ctx: DifferentEdgesMatchModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementBindingsOrElements`.
     * @param ctx the parse tree
     */
    enterElementBindingsOrElements?: (ctx: ElementBindingsOrElementsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementBindingsOrElements`.
     * @param ctx the parse tree
     */
    exitElementBindingsOrElements?: (ctx: ElementBindingsOrElementsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeBindingsOrEdges`.
     * @param ctx the parse tree
     */
    enterEdgeBindingsOrEdges?: (ctx: EdgeBindingsOrEdgesContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeBindingsOrEdges`.
     * @param ctx the parse tree
     */
    exitEdgeBindingsOrEdges?: (ctx: EdgeBindingsOrEdgesContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathPatternList`.
     * @param ctx the parse tree
     */
    enterPathPatternList?: (ctx: PathPatternListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathPatternList`.
     * @param ctx the parse tree
     */
    exitPathPatternList?: (ctx: PathPatternListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathPattern`.
     * @param ctx the parse tree
     */
    enterPathPattern?: (ctx: PathPatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathPattern`.
     * @param ctx the parse tree
     */
    exitPathPattern?: (ctx: PathPatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterPathVariableDeclaration?: (ctx: PathVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitPathVariableDeclaration?: (ctx: PathVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.keepClause`.
     * @param ctx the parse tree
     */
    enterKeepClause?: (ctx: KeepClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.keepClause`.
     * @param ctx the parse tree
     */
    exitKeepClause?: (ctx: KeepClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternWhereClause`.
     * @param ctx the parse tree
     */
    enterGraphPatternWhereClause?: (ctx: GraphPatternWhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternWhereClause`.
     * @param ctx the parse tree
     */
    exitGraphPatternWhereClause?: (ctx: GraphPatternWhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertGraphPattern`.
     * @param ctx the parse tree
     */
    enterInsertGraphPattern?: (ctx: InsertGraphPatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertGraphPattern`.
     * @param ctx the parse tree
     */
    exitInsertGraphPattern?: (ctx: InsertGraphPatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertPathPatternList`.
     * @param ctx the parse tree
     */
    enterInsertPathPatternList?: (ctx: InsertPathPatternListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertPathPatternList`.
     * @param ctx the parse tree
     */
    exitInsertPathPatternList?: (ctx: InsertPathPatternListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertPathPattern`.
     * @param ctx the parse tree
     */
    enterInsertPathPattern?: (ctx: InsertPathPatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertPathPattern`.
     * @param ctx the parse tree
     */
    exitInsertPathPattern?: (ctx: InsertPathPatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertNodePattern`.
     * @param ctx the parse tree
     */
    enterInsertNodePattern?: (ctx: InsertNodePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertNodePattern`.
     * @param ctx the parse tree
     */
    exitInsertNodePattern?: (ctx: InsertNodePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertEdgePattern`.
     * @param ctx the parse tree
     */
    enterInsertEdgePattern?: (ctx: InsertEdgePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertEdgePattern`.
     * @param ctx the parse tree
     */
    exitInsertEdgePattern?: (ctx: InsertEdgePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertEdgePointingLeft`.
     * @param ctx the parse tree
     */
    enterInsertEdgePointingLeft?: (ctx: InsertEdgePointingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertEdgePointingLeft`.
     * @param ctx the parse tree
     */
    exitInsertEdgePointingLeft?: (ctx: InsertEdgePointingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertEdgePointingRight`.
     * @param ctx the parse tree
     */
    enterInsertEdgePointingRight?: (ctx: InsertEdgePointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertEdgePointingRight`.
     * @param ctx the parse tree
     */
    exitInsertEdgePointingRight?: (ctx: InsertEdgePointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertEdgeUndirected`.
     * @param ctx the parse tree
     */
    enterInsertEdgeUndirected?: (ctx: InsertEdgeUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertEdgeUndirected`.
     * @param ctx the parse tree
     */
    exitInsertEdgeUndirected?: (ctx: InsertEdgeUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.insertElementPatternFiller`.
     * @param ctx the parse tree
     */
    enterInsertElementPatternFiller?: (ctx: InsertElementPatternFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.insertElementPatternFiller`.
     * @param ctx the parse tree
     */
    exitInsertElementPatternFiller?: (ctx: InsertElementPatternFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labelAndPropertySetSpecification`.
     * @param ctx the parse tree
     */
    enterLabelAndPropertySetSpecification?: (ctx: LabelAndPropertySetSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labelAndPropertySetSpecification`.
     * @param ctx the parse tree
     */
    exitLabelAndPropertySetSpecification?: (ctx: LabelAndPropertySetSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathPatternPrefix`.
     * @param ctx the parse tree
     */
    enterPathPatternPrefix?: (ctx: PathPatternPrefixContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathPatternPrefix`.
     * @param ctx the parse tree
     */
    exitPathPatternPrefix?: (ctx: PathPatternPrefixContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathModePrefix`.
     * @param ctx the parse tree
     */
    enterPathModePrefix?: (ctx: PathModePrefixContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathModePrefix`.
     * @param ctx the parse tree
     */
    exitPathModePrefix?: (ctx: PathModePrefixContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathMode`.
     * @param ctx the parse tree
     */
    enterPathMode?: (ctx: PathModeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathMode`.
     * @param ctx the parse tree
     */
    exitPathMode?: (ctx: PathModeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathSearchPrefix`.
     * @param ctx the parse tree
     */
    enterPathSearchPrefix?: (ctx: PathSearchPrefixContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathSearchPrefix`.
     * @param ctx the parse tree
     */
    exitPathSearchPrefix?: (ctx: PathSearchPrefixContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.allPathSearch`.
     * @param ctx the parse tree
     */
    enterAllPathSearch?: (ctx: AllPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.allPathSearch`.
     * @param ctx the parse tree
     */
    exitAllPathSearch?: (ctx: AllPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathOrPaths`.
     * @param ctx the parse tree
     */
    enterPathOrPaths?: (ctx: PathOrPathsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathOrPaths`.
     * @param ctx the parse tree
     */
    exitPathOrPaths?: (ctx: PathOrPathsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.anyPathSearch`.
     * @param ctx the parse tree
     */
    enterAnyPathSearch?: (ctx: AnyPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.anyPathSearch`.
     * @param ctx the parse tree
     */
    exitAnyPathSearch?: (ctx: AnyPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numberOfPaths`.
     * @param ctx the parse tree
     */
    enterNumberOfPaths?: (ctx: NumberOfPathsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numberOfPaths`.
     * @param ctx the parse tree
     */
    exitNumberOfPaths?: (ctx: NumberOfPathsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.shortestPathSearch`.
     * @param ctx the parse tree
     */
    enterShortestPathSearch?: (ctx: ShortestPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.shortestPathSearch`.
     * @param ctx the parse tree
     */
    exitShortestPathSearch?: (ctx: ShortestPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.allShortestPathSearch`.
     * @param ctx the parse tree
     */
    enterAllShortestPathSearch?: (ctx: AllShortestPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.allShortestPathSearch`.
     * @param ctx the parse tree
     */
    exitAllShortestPathSearch?: (ctx: AllShortestPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.anyShortestPathSearch`.
     * @param ctx the parse tree
     */
    enterAnyShortestPathSearch?: (ctx: AnyShortestPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.anyShortestPathSearch`.
     * @param ctx the parse tree
     */
    exitAnyShortestPathSearch?: (ctx: AnyShortestPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.countedShortestPathSearch`.
     * @param ctx the parse tree
     */
    enterCountedShortestPathSearch?: (ctx: CountedShortestPathSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.countedShortestPathSearch`.
     * @param ctx the parse tree
     */
    exitCountedShortestPathSearch?: (ctx: CountedShortestPathSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.countedShortestGroupSearch`.
     * @param ctx the parse tree
     */
    enterCountedShortestGroupSearch?: (ctx: CountedShortestGroupSearchContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.countedShortestGroupSearch`.
     * @param ctx the parse tree
     */
    exitCountedShortestGroupSearch?: (ctx: CountedShortestGroupSearchContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numberOfGroups`.
     * @param ctx the parse tree
     */
    enterNumberOfGroups?: (ctx: NumberOfGroupsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numberOfGroups`.
     * @param ctx the parse tree
     */
    exitNumberOfGroups?: (ctx: NumberOfGroupsContext) => void;
    /**
     * Enter a parse tree produced by the `ppePathTerm`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    enterPpePathTerm?: (ctx: PpePathTermContext) => void;
    /**
     * Exit a parse tree produced by the `ppePathTerm`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    exitPpePathTerm?: (ctx: PpePathTermContext) => void;
    /**
     * Enter a parse tree produced by the `ppeMultisetAlternation`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    enterPpeMultisetAlternation?: (ctx: PpeMultisetAlternationContext) => void;
    /**
     * Exit a parse tree produced by the `ppeMultisetAlternation`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    exitPpeMultisetAlternation?: (ctx: PpeMultisetAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `ppePatternUnion`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    enterPpePatternUnion?: (ctx: PpePatternUnionContext) => void;
    /**
     * Exit a parse tree produced by the `ppePatternUnion`
     * labeled alternative in `GQLParser.pathPatternExpression`.
     * @param ctx the parse tree
     */
    exitPpePatternUnion?: (ctx: PpePatternUnionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathTerm`.
     * @param ctx the parse tree
     */
    enterPathTerm?: (ctx: PathTermContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathTerm`.
     * @param ctx the parse tree
     */
    exitPathTerm?: (ctx: PathTermContext) => void;
    /**
     * Enter a parse tree produced by the `pfPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    enterPfPathPrimary?: (ctx: PfPathPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `pfPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    exitPfPathPrimary?: (ctx: PfPathPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `pfQuantifiedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    enterPfQuantifiedPathPrimary?: (ctx: PfQuantifiedPathPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `pfQuantifiedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    exitPfQuantifiedPathPrimary?: (ctx: PfQuantifiedPathPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `pfQuestionedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    enterPfQuestionedPathPrimary?: (ctx: PfQuestionedPathPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `pfQuestionedPathPrimary`
     * labeled alternative in `GQLParser.pathFactor`.
     * @param ctx the parse tree
     */
    exitPfQuestionedPathPrimary?: (ctx: PfQuestionedPathPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `ppElementPattern`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    enterPpElementPattern?: (ctx: PpElementPatternContext) => void;
    /**
     * Exit a parse tree produced by the `ppElementPattern`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    exitPpElementPattern?: (ctx: PpElementPatternContext) => void;
    /**
     * Enter a parse tree produced by the `ppParenthesizedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    enterPpParenthesizedPathPatternExpression?: (ctx: PpParenthesizedPathPatternExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ppParenthesizedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    exitPpParenthesizedPathPatternExpression?: (ctx: PpParenthesizedPathPatternExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ppSimplifiedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    enterPpSimplifiedPathPatternExpression?: (ctx: PpSimplifiedPathPatternExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ppSimplifiedPathPatternExpression`
     * labeled alternative in `GQLParser.pathPrimary`.
     * @param ctx the parse tree
     */
    exitPpSimplifiedPathPatternExpression?: (ctx: PpSimplifiedPathPatternExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementPattern`.
     * @param ctx the parse tree
     */
    enterElementPattern?: (ctx: ElementPatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementPattern`.
     * @param ctx the parse tree
     */
    exitElementPattern?: (ctx: ElementPatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodePattern`.
     * @param ctx the parse tree
     */
    enterNodePattern?: (ctx: NodePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodePattern`.
     * @param ctx the parse tree
     */
    exitNodePattern?: (ctx: NodePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementPatternFiller`.
     * @param ctx the parse tree
     */
    enterElementPatternFiller?: (ctx: ElementPatternFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementPatternFiller`.
     * @param ctx the parse tree
     */
    exitElementPatternFiller?: (ctx: ElementPatternFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterElementVariableDeclaration?: (ctx: ElementVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitElementVariableDeclaration?: (ctx: ElementVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.isLabelExpression`.
     * @param ctx the parse tree
     */
    enterIsLabelExpression?: (ctx: IsLabelExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.isLabelExpression`.
     * @param ctx the parse tree
     */
    exitIsLabelExpression?: (ctx: IsLabelExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.isOrColon`.
     * @param ctx the parse tree
     */
    enterIsOrColon?: (ctx: IsOrColonContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.isOrColon`.
     * @param ctx the parse tree
     */
    exitIsOrColon?: (ctx: IsOrColonContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementPatternPredicate`.
     * @param ctx the parse tree
     */
    enterElementPatternPredicate?: (ctx: ElementPatternPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementPatternPredicate`.
     * @param ctx the parse tree
     */
    exitElementPatternPredicate?: (ctx: ElementPatternPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementPatternWhereClause`.
     * @param ctx the parse tree
     */
    enterElementPatternWhereClause?: (ctx: ElementPatternWhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementPatternWhereClause`.
     * @param ctx the parse tree
     */
    exitElementPatternWhereClause?: (ctx: ElementPatternWhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementPropertySpecification`.
     * @param ctx the parse tree
     */
    enterElementPropertySpecification?: (ctx: ElementPropertySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementPropertySpecification`.
     * @param ctx the parse tree
     */
    exitElementPropertySpecification?: (ctx: ElementPropertySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyKeyValuePairList`.
     * @param ctx the parse tree
     */
    enterPropertyKeyValuePairList?: (ctx: PropertyKeyValuePairListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyKeyValuePairList`.
     * @param ctx the parse tree
     */
    exitPropertyKeyValuePairList?: (ctx: PropertyKeyValuePairListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyKeyValuePair`.
     * @param ctx the parse tree
     */
    enterPropertyKeyValuePair?: (ctx: PropertyKeyValuePairContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyKeyValuePair`.
     * @param ctx the parse tree
     */
    exitPropertyKeyValuePair?: (ctx: PropertyKeyValuePairContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgePattern`.
     * @param ctx the parse tree
     */
    enterEdgePattern?: (ctx: EdgePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgePattern`.
     * @param ctx the parse tree
     */
    exitEdgePattern?: (ctx: EdgePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgePattern`.
     * @param ctx the parse tree
     */
    enterFullEdgePattern?: (ctx: FullEdgePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgePattern`.
     * @param ctx the parse tree
     */
    exitFullEdgePattern?: (ctx: FullEdgePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgePointingLeft`.
     * @param ctx the parse tree
     */
    enterFullEdgePointingLeft?: (ctx: FullEdgePointingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgePointingLeft`.
     * @param ctx the parse tree
     */
    exitFullEdgePointingLeft?: (ctx: FullEdgePointingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgeUndirected`.
     * @param ctx the parse tree
     */
    enterFullEdgeUndirected?: (ctx: FullEdgeUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgeUndirected`.
     * @param ctx the parse tree
     */
    exitFullEdgeUndirected?: (ctx: FullEdgeUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgePointingRight`.
     * @param ctx the parse tree
     */
    enterFullEdgePointingRight?: (ctx: FullEdgePointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgePointingRight`.
     * @param ctx the parse tree
     */
    exitFullEdgePointingRight?: (ctx: FullEdgePointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgeLeftOrUndirected`.
     * @param ctx the parse tree
     */
    enterFullEdgeLeftOrUndirected?: (ctx: FullEdgeLeftOrUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgeLeftOrUndirected`.
     * @param ctx the parse tree
     */
    exitFullEdgeLeftOrUndirected?: (ctx: FullEdgeLeftOrUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgeUndirectedOrRight`.
     * @param ctx the parse tree
     */
    enterFullEdgeUndirectedOrRight?: (ctx: FullEdgeUndirectedOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgeUndirectedOrRight`.
     * @param ctx the parse tree
     */
    exitFullEdgeUndirectedOrRight?: (ctx: FullEdgeUndirectedOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgeLeftOrRight`.
     * @param ctx the parse tree
     */
    enterFullEdgeLeftOrRight?: (ctx: FullEdgeLeftOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgeLeftOrRight`.
     * @param ctx the parse tree
     */
    exitFullEdgeLeftOrRight?: (ctx: FullEdgeLeftOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fullEdgeAnyDirection`.
     * @param ctx the parse tree
     */
    enterFullEdgeAnyDirection?: (ctx: FullEdgeAnyDirectionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fullEdgeAnyDirection`.
     * @param ctx the parse tree
     */
    exitFullEdgeAnyDirection?: (ctx: FullEdgeAnyDirectionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.abbreviatedEdgePattern`.
     * @param ctx the parse tree
     */
    enterAbbreviatedEdgePattern?: (ctx: AbbreviatedEdgePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.abbreviatedEdgePattern`.
     * @param ctx the parse tree
     */
    exitAbbreviatedEdgePattern?: (ctx: AbbreviatedEdgePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.parenthesizedPathPatternExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedPathPatternExpression?: (ctx: ParenthesizedPathPatternExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.parenthesizedPathPatternExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedPathPatternExpression?: (ctx: ParenthesizedPathPatternExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.subpathVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterSubpathVariableDeclaration?: (ctx: SubpathVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.subpathVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitSubpathVariableDeclaration?: (ctx: SubpathVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.parenthesizedPathPatternWhereClause`.
     * @param ctx the parse tree
     */
    enterParenthesizedPathPatternWhereClause?: (ctx: ParenthesizedPathPatternWhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.parenthesizedPathPatternWhereClause`.
     * @param ctx the parse tree
     */
    exitParenthesizedPathPatternWhereClause?: (ctx: ParenthesizedPathPatternWhereClauseContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionNegation`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionNegation?: (ctx: LabelExpressionNegationContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionNegation`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionNegation?: (ctx: LabelExpressionNegationContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionName`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionName?: (ctx: LabelExpressionNameContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionName`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionName?: (ctx: LabelExpressionNameContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionWildcard`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionWildcard?: (ctx: LabelExpressionWildcardContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionWildcard`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionWildcard?: (ctx: LabelExpressionWildcardContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionParenthesized`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionParenthesized?: (ctx: LabelExpressionParenthesizedContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionParenthesized`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionParenthesized?: (ctx: LabelExpressionParenthesizedContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionConjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionConjunction?: (ctx: LabelExpressionConjunctionContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionConjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionConjunction?: (ctx: LabelExpressionConjunctionContext) => void;
    /**
     * Enter a parse tree produced by the `labelExpressionDisjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    enterLabelExpressionDisjunction?: (ctx: LabelExpressionDisjunctionContext) => void;
    /**
     * Exit a parse tree produced by the `labelExpressionDisjunction`
     * labeled alternative in `GQLParser.labelExpression`.
     * @param ctx the parse tree
     */
    exitLabelExpressionDisjunction?: (ctx: LabelExpressionDisjunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathVariableReference`.
     * @param ctx the parse tree
     */
    enterPathVariableReference?: (ctx: PathVariableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathVariableReference`.
     * @param ctx the parse tree
     */
    exitPathVariableReference?: (ctx: PathVariableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementVariableReference`.
     * @param ctx the parse tree
     */
    enterElementVariableReference?: (ctx: ElementVariableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementVariableReference`.
     * @param ctx the parse tree
     */
    exitElementVariableReference?: (ctx: ElementVariableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphPatternQuantifier`.
     * @param ctx the parse tree
     */
    enterGraphPatternQuantifier?: (ctx: GraphPatternQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphPatternQuantifier`.
     * @param ctx the parse tree
     */
    exitGraphPatternQuantifier?: (ctx: GraphPatternQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fixedQuantifier`.
     * @param ctx the parse tree
     */
    enterFixedQuantifier?: (ctx: FixedQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fixedQuantifier`.
     * @param ctx the parse tree
     */
    exitFixedQuantifier?: (ctx: FixedQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalQuantifier`.
     * @param ctx the parse tree
     */
    enterGeneralQuantifier?: (ctx: GeneralQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalQuantifier`.
     * @param ctx the parse tree
     */
    exitGeneralQuantifier?: (ctx: GeneralQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.lowerBound`.
     * @param ctx the parse tree
     */
    enterLowerBound?: (ctx: LowerBoundContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.lowerBound`.
     * @param ctx the parse tree
     */
    exitLowerBound?: (ctx: LowerBoundContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.upperBound`.
     * @param ctx the parse tree
     */
    enterUpperBound?: (ctx: UpperBoundContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.upperBound`.
     * @param ctx the parse tree
     */
    exitUpperBound?: (ctx: UpperBoundContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedPathPatternExpression`.
     * @param ctx the parse tree
     */
    enterSimplifiedPathPatternExpression?: (ctx: SimplifiedPathPatternExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedPathPatternExpression`.
     * @param ctx the parse tree
     */
    exitSimplifiedPathPatternExpression?: (ctx: SimplifiedPathPatternExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingLeft`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingLeft?: (ctx: SimplifiedDefaultingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingLeft`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingLeft?: (ctx: SimplifiedDefaultingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingUndirected`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingUndirected?: (ctx: SimplifiedDefaultingUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingUndirected`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingUndirected?: (ctx: SimplifiedDefaultingUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingRight?: (ctx: SimplifiedDefaultingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingRight?: (ctx: SimplifiedDefaultingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrUndirected`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingLeftOrUndirected?: (ctx: SimplifiedDefaultingLeftOrUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrUndirected`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingLeftOrUndirected?: (ctx: SimplifiedDefaultingLeftOrUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingUndirectedOrRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingUndirectedOrRight?: (ctx: SimplifiedDefaultingUndirectedOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingUndirectedOrRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingUndirectedOrRight?: (ctx: SimplifiedDefaultingUndirectedOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingLeftOrRight?: (ctx: SimplifiedDefaultingLeftOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingLeftOrRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingLeftOrRight?: (ctx: SimplifiedDefaultingLeftOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDefaultingAnyDirection`.
     * @param ctx the parse tree
     */
    enterSimplifiedDefaultingAnyDirection?: (ctx: SimplifiedDefaultingAnyDirectionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDefaultingAnyDirection`.
     * @param ctx the parse tree
     */
    exitSimplifiedDefaultingAnyDirection?: (ctx: SimplifiedDefaultingAnyDirectionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedContents`.
     * @param ctx the parse tree
     */
    enterSimplifiedContents?: (ctx: SimplifiedContentsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedContents`.
     * @param ctx the parse tree
     */
    exitSimplifiedContents?: (ctx: SimplifiedContentsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedPathUnion`.
     * @param ctx the parse tree
     */
    enterSimplifiedPathUnion?: (ctx: SimplifiedPathUnionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedPathUnion`.
     * @param ctx the parse tree
     */
    exitSimplifiedPathUnion?: (ctx: SimplifiedPathUnionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedMultisetAlternation`.
     * @param ctx the parse tree
     */
    enterSimplifiedMultisetAlternation?: (ctx: SimplifiedMultisetAlternationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedMultisetAlternation`.
     * @param ctx the parse tree
     */
    exitSimplifiedMultisetAlternation?: (ctx: SimplifiedMultisetAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `simplifiedFactorLowLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     */
    enterSimplifiedFactorLowLabel?: (ctx: SimplifiedFactorLowLabelContext) => void;
    /**
     * Exit a parse tree produced by the `simplifiedFactorLowLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     */
    exitSimplifiedFactorLowLabel?: (ctx: SimplifiedFactorLowLabelContext) => void;
    /**
     * Enter a parse tree produced by the `simplifiedConcatenationLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     */
    enterSimplifiedConcatenationLabel?: (ctx: SimplifiedConcatenationLabelContext) => void;
    /**
     * Exit a parse tree produced by the `simplifiedConcatenationLabel`
     * labeled alternative in `GQLParser.simplifiedTerm`.
     * @param ctx the parse tree
     */
    exitSimplifiedConcatenationLabel?: (ctx: SimplifiedConcatenationLabelContext) => void;
    /**
     * Enter a parse tree produced by the `simplifiedFactorHighLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     */
    enterSimplifiedFactorHighLabel?: (ctx: SimplifiedFactorHighLabelContext) => void;
    /**
     * Exit a parse tree produced by the `simplifiedFactorHighLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     */
    exitSimplifiedFactorHighLabel?: (ctx: SimplifiedFactorHighLabelContext) => void;
    /**
     * Enter a parse tree produced by the `simplifiedConjunctionLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     */
    enterSimplifiedConjunctionLabel?: (ctx: SimplifiedConjunctionLabelContext) => void;
    /**
     * Exit a parse tree produced by the `simplifiedConjunctionLabel`
     * labeled alternative in `GQLParser.simplifiedFactorLow`.
     * @param ctx the parse tree
     */
    exitSimplifiedConjunctionLabel?: (ctx: SimplifiedConjunctionLabelContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedFactorHigh`.
     * @param ctx the parse tree
     */
    enterSimplifiedFactorHigh?: (ctx: SimplifiedFactorHighContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedFactorHigh`.
     * @param ctx the parse tree
     */
    exitSimplifiedFactorHigh?: (ctx: SimplifiedFactorHighContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedQuantified`.
     * @param ctx the parse tree
     */
    enterSimplifiedQuantified?: (ctx: SimplifiedQuantifiedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedQuantified`.
     * @param ctx the parse tree
     */
    exitSimplifiedQuantified?: (ctx: SimplifiedQuantifiedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedQuestioned`.
     * @param ctx the parse tree
     */
    enterSimplifiedQuestioned?: (ctx: SimplifiedQuestionedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedQuestioned`.
     * @param ctx the parse tree
     */
    exitSimplifiedQuestioned?: (ctx: SimplifiedQuestionedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedTertiary`.
     * @param ctx the parse tree
     */
    enterSimplifiedTertiary?: (ctx: SimplifiedTertiaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedTertiary`.
     * @param ctx the parse tree
     */
    exitSimplifiedTertiary?: (ctx: SimplifiedTertiaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedDirectionOverride`.
     * @param ctx the parse tree
     */
    enterSimplifiedDirectionOverride?: (ctx: SimplifiedDirectionOverrideContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedDirectionOverride`.
     * @param ctx the parse tree
     */
    exitSimplifiedDirectionOverride?: (ctx: SimplifiedDirectionOverrideContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideLeft`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideLeft?: (ctx: SimplifiedOverrideLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideLeft`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideLeft?: (ctx: SimplifiedOverrideLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideUndirected`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideUndirected?: (ctx: SimplifiedOverrideUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideUndirected`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideUndirected?: (ctx: SimplifiedOverrideUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideRight?: (ctx: SimplifiedOverrideRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideRight?: (ctx: SimplifiedOverrideRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideLeftOrUndirected`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideLeftOrUndirected?: (ctx: SimplifiedOverrideLeftOrUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideLeftOrUndirected`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideLeftOrUndirected?: (ctx: SimplifiedOverrideLeftOrUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideUndirectedOrRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideUndirectedOrRight?: (ctx: SimplifiedOverrideUndirectedOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideUndirectedOrRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideUndirectedOrRight?: (ctx: SimplifiedOverrideUndirectedOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideLeftOrRight`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideLeftOrRight?: (ctx: SimplifiedOverrideLeftOrRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideLeftOrRight`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideLeftOrRight?: (ctx: SimplifiedOverrideLeftOrRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedOverrideAnyDirection`.
     * @param ctx the parse tree
     */
    enterSimplifiedOverrideAnyDirection?: (ctx: SimplifiedOverrideAnyDirectionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedOverrideAnyDirection`.
     * @param ctx the parse tree
     */
    exitSimplifiedOverrideAnyDirection?: (ctx: SimplifiedOverrideAnyDirectionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedSecondary`.
     * @param ctx the parse tree
     */
    enterSimplifiedSecondary?: (ctx: SimplifiedSecondaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedSecondary`.
     * @param ctx the parse tree
     */
    exitSimplifiedSecondary?: (ctx: SimplifiedSecondaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedNegation`.
     * @param ctx the parse tree
     */
    enterSimplifiedNegation?: (ctx: SimplifiedNegationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedNegation`.
     * @param ctx the parse tree
     */
    exitSimplifiedNegation?: (ctx: SimplifiedNegationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simplifiedPrimary`.
     * @param ctx the parse tree
     */
    enterSimplifiedPrimary?: (ctx: SimplifiedPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simplifiedPrimary`.
     * @param ctx the parse tree
     */
    exitSimplifiedPrimary?: (ctx: SimplifiedPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.yieldClause`.
     * @param ctx the parse tree
     */
    enterYieldClause?: (ctx: YieldClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.yieldClause`.
     * @param ctx the parse tree
     */
    exitYieldClause?: (ctx: YieldClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.yieldItemList`.
     * @param ctx the parse tree
     */
    enterYieldItemList?: (ctx: YieldItemListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.yieldItemList`.
     * @param ctx the parse tree
     */
    exitYieldItemList?: (ctx: YieldItemListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.yieldItem`.
     * @param ctx the parse tree
     */
    enterYieldItem?: (ctx: YieldItemContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.yieldItem`.
     * @param ctx the parse tree
     */
    exitYieldItem?: (ctx: YieldItemContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.yieldItemName`.
     * @param ctx the parse tree
     */
    enterYieldItemName?: (ctx: YieldItemNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.yieldItemName`.
     * @param ctx the parse tree
     */
    exitYieldItemName?: (ctx: YieldItemNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.yieldItemAlias`.
     * @param ctx the parse tree
     */
    enterYieldItemAlias?: (ctx: YieldItemAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.yieldItemAlias`.
     * @param ctx the parse tree
     */
    exitYieldItemAlias?: (ctx: YieldItemAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.groupingElementList`.
     * @param ctx the parse tree
     */
    enterGroupingElementList?: (ctx: GroupingElementListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.groupingElementList`.
     * @param ctx the parse tree
     */
    exitGroupingElementList?: (ctx: GroupingElementListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.emptyGroupingSet`.
     * @param ctx the parse tree
     */
    enterEmptyGroupingSet?: (ctx: EmptyGroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.emptyGroupingSet`.
     * @param ctx the parse tree
     */
    exitEmptyGroupingSet?: (ctx: EmptyGroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sortSpecificationList`.
     * @param ctx the parse tree
     */
    enterSortSpecificationList?: (ctx: SortSpecificationListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sortSpecificationList`.
     * @param ctx the parse tree
     */
    exitSortSpecificationList?: (ctx: SortSpecificationListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sortSpecification`.
     * @param ctx the parse tree
     */
    enterSortSpecification?: (ctx: SortSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sortSpecification`.
     * @param ctx the parse tree
     */
    exitSortSpecification?: (ctx: SortSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sortKey`.
     * @param ctx the parse tree
     */
    enterSortKey?: (ctx: SortKeyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sortKey`.
     * @param ctx the parse tree
     */
    exitSortKey?: (ctx: SortKeyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.orderingSpecification`.
     * @param ctx the parse tree
     */
    enterOrderingSpecification?: (ctx: OrderingSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.orderingSpecification`.
     * @param ctx the parse tree
     */
    exitOrderingSpecification?: (ctx: OrderingSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nullOrdering`.
     * @param ctx the parse tree
     */
    enterNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nullOrdering`.
     * @param ctx the parse tree
     */
    exitNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.offsetClause`.
     * @param ctx the parse tree
     */
    enterOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.offsetClause`.
     * @param ctx the parse tree
     */
    exitOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.offsetSynonym`.
     * @param ctx the parse tree
     */
    enterOffsetSynonym?: (ctx: OffsetSynonymContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.offsetSynonym`.
     * @param ctx the parse tree
     */
    exitOffsetSynonym?: (ctx: OffsetSynonymContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.schemaReference`.
     * @param ctx the parse tree
     */
    enterSchemaReference?: (ctx: SchemaReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.schemaReference`.
     * @param ctx the parse tree
     */
    exitSchemaReference?: (ctx: SchemaReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.absoluteCatalogSchemaReference`.
     * @param ctx the parse tree
     */
    enterAbsoluteCatalogSchemaReference?: (ctx: AbsoluteCatalogSchemaReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.absoluteCatalogSchemaReference`.
     * @param ctx the parse tree
     */
    exitAbsoluteCatalogSchemaReference?: (ctx: AbsoluteCatalogSchemaReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.catalogSchemaParentAndName`.
     * @param ctx the parse tree
     */
    enterCatalogSchemaParentAndName?: (ctx: CatalogSchemaParentAndNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.catalogSchemaParentAndName`.
     * @param ctx the parse tree
     */
    exitCatalogSchemaParentAndName?: (ctx: CatalogSchemaParentAndNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.relativeCatalogSchemaReference`.
     * @param ctx the parse tree
     */
    enterRelativeCatalogSchemaReference?: (ctx: RelativeCatalogSchemaReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.relativeCatalogSchemaReference`.
     * @param ctx the parse tree
     */
    exitRelativeCatalogSchemaReference?: (ctx: RelativeCatalogSchemaReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.predefinedSchemaReference`.
     * @param ctx the parse tree
     */
    enterPredefinedSchemaReference?: (ctx: PredefinedSchemaReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.predefinedSchemaReference`.
     * @param ctx the parse tree
     */
    exitPredefinedSchemaReference?: (ctx: PredefinedSchemaReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.absoluteDirectoryPath`.
     * @param ctx the parse tree
     */
    enterAbsoluteDirectoryPath?: (ctx: AbsoluteDirectoryPathContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.absoluteDirectoryPath`.
     * @param ctx the parse tree
     */
    exitAbsoluteDirectoryPath?: (ctx: AbsoluteDirectoryPathContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.relativeDirectoryPath`.
     * @param ctx the parse tree
     */
    enterRelativeDirectoryPath?: (ctx: RelativeDirectoryPathContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.relativeDirectoryPath`.
     * @param ctx the parse tree
     */
    exitRelativeDirectoryPath?: (ctx: RelativeDirectoryPathContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleDirectoryPath`.
     * @param ctx the parse tree
     */
    enterSimpleDirectoryPath?: (ctx: SimpleDirectoryPathContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleDirectoryPath`.
     * @param ctx the parse tree
     */
    exitSimpleDirectoryPath?: (ctx: SimpleDirectoryPathContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphReference`.
     * @param ctx the parse tree
     */
    enterGraphReference?: (ctx: GraphReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphReference`.
     * @param ctx the parse tree
     */
    exitGraphReference?: (ctx: GraphReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.catalogGraphParentAndName`.
     * @param ctx the parse tree
     */
    enterCatalogGraphParentAndName?: (ctx: CatalogGraphParentAndNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.catalogGraphParentAndName`.
     * @param ctx the parse tree
     */
    exitCatalogGraphParentAndName?: (ctx: CatalogGraphParentAndNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.homeGraph`.
     * @param ctx the parse tree
     */
    enterHomeGraph?: (ctx: HomeGraphContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.homeGraph`.
     * @param ctx the parse tree
     */
    exitHomeGraph?: (ctx: HomeGraphContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphTypeReference`.
     * @param ctx the parse tree
     */
    enterGraphTypeReference?: (ctx: GraphTypeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphTypeReference`.
     * @param ctx the parse tree
     */
    exitGraphTypeReference?: (ctx: GraphTypeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.catalogGraphTypeParentAndName`.
     * @param ctx the parse tree
     */
    enterCatalogGraphTypeParentAndName?: (ctx: CatalogGraphTypeParentAndNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.catalogGraphTypeParentAndName`.
     * @param ctx the parse tree
     */
    exitCatalogGraphTypeParentAndName?: (ctx: CatalogGraphTypeParentAndNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableReference`.
     * @param ctx the parse tree
     */
    enterBindingTableReference?: (ctx: BindingTableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableReference`.
     * @param ctx the parse tree
     */
    exitBindingTableReference?: (ctx: BindingTableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureReference`.
     * @param ctx the parse tree
     */
    enterProcedureReference?: (ctx: ProcedureReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureReference`.
     * @param ctx the parse tree
     */
    exitProcedureReference?: (ctx: ProcedureReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.catalogProcedureParentAndName`.
     * @param ctx the parse tree
     */
    enterCatalogProcedureParentAndName?: (ctx: CatalogProcedureParentAndNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.catalogProcedureParentAndName`.
     * @param ctx the parse tree
     */
    exitCatalogProcedureParentAndName?: (ctx: CatalogProcedureParentAndNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.catalogObjectParentReference`.
     * @param ctx the parse tree
     */
    enterCatalogObjectParentReference?: (ctx: CatalogObjectParentReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.catalogObjectParentReference`.
     * @param ctx the parse tree
     */
    exitCatalogObjectParentReference?: (ctx: CatalogObjectParentReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.referenceParameterSpecification`.
     * @param ctx the parse tree
     */
    enterReferenceParameterSpecification?: (ctx: ReferenceParameterSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.referenceParameterSpecification`.
     * @param ctx the parse tree
     */
    exitReferenceParameterSpecification?: (ctx: ReferenceParameterSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nestedGraphTypeSpecification`.
     * @param ctx the parse tree
     */
    enterNestedGraphTypeSpecification?: (ctx: NestedGraphTypeSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nestedGraphTypeSpecification`.
     * @param ctx the parse tree
     */
    exitNestedGraphTypeSpecification?: (ctx: NestedGraphTypeSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphTypeSpecificationBody`.
     * @param ctx the parse tree
     */
    enterGraphTypeSpecificationBody?: (ctx: GraphTypeSpecificationBodyContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphTypeSpecificationBody`.
     * @param ctx the parse tree
     */
    exitGraphTypeSpecificationBody?: (ctx: GraphTypeSpecificationBodyContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementTypeList`.
     * @param ctx the parse tree
     */
    enterElementTypeList?: (ctx: ElementTypeListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementTypeList`.
     * @param ctx the parse tree
     */
    exitElementTypeList?: (ctx: ElementTypeListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementTypeSpecification`.
     * @param ctx the parse tree
     */
    enterElementTypeSpecification?: (ctx: ElementTypeSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementTypeSpecification`.
     * @param ctx the parse tree
     */
    exitElementTypeSpecification?: (ctx: ElementTypeSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeSpecification`.
     * @param ctx the parse tree
     */
    enterNodeTypeSpecification?: (ctx: NodeTypeSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeSpecification`.
     * @param ctx the parse tree
     */
    exitNodeTypeSpecification?: (ctx: NodeTypeSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypePattern`.
     * @param ctx the parse tree
     */
    enterNodeTypePattern?: (ctx: NodeTypePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypePattern`.
     * @param ctx the parse tree
     */
    exitNodeTypePattern?: (ctx: NodeTypePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypePhrase`.
     * @param ctx the parse tree
     */
    enterNodeTypePhrase?: (ctx: NodeTypePhraseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypePhrase`.
     * @param ctx the parse tree
     */
    exitNodeTypePhrase?: (ctx: NodeTypePhraseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypePhraseFiller`.
     * @param ctx the parse tree
     */
    enterNodeTypePhraseFiller?: (ctx: NodeTypePhraseFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypePhraseFiller`.
     * @param ctx the parse tree
     */
    exitNodeTypePhraseFiller?: (ctx: NodeTypePhraseFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeFiller`.
     * @param ctx the parse tree
     */
    enterNodeTypeFiller?: (ctx: NodeTypeFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeFiller`.
     * @param ctx the parse tree
     */
    exitNodeTypeFiller?: (ctx: NodeTypeFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.localNodeTypeAlias`.
     * @param ctx the parse tree
     */
    enterLocalNodeTypeAlias?: (ctx: LocalNodeTypeAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.localNodeTypeAlias`.
     * @param ctx the parse tree
     */
    exitLocalNodeTypeAlias?: (ctx: LocalNodeTypeAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeImpliedContent`.
     * @param ctx the parse tree
     */
    enterNodeTypeImpliedContent?: (ctx: NodeTypeImpliedContentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeImpliedContent`.
     * @param ctx the parse tree
     */
    exitNodeTypeImpliedContent?: (ctx: NodeTypeImpliedContentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeKeyLabelSet`.
     * @param ctx the parse tree
     */
    enterNodeTypeKeyLabelSet?: (ctx: NodeTypeKeyLabelSetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeKeyLabelSet`.
     * @param ctx the parse tree
     */
    exitNodeTypeKeyLabelSet?: (ctx: NodeTypeKeyLabelSetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeLabelSet`.
     * @param ctx the parse tree
     */
    enterNodeTypeLabelSet?: (ctx: NodeTypeLabelSetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeLabelSet`.
     * @param ctx the parse tree
     */
    exitNodeTypeLabelSet?: (ctx: NodeTypeLabelSetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypePropertyTypes`.
     * @param ctx the parse tree
     */
    enterNodeTypePropertyTypes?: (ctx: NodeTypePropertyTypesContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypePropertyTypes`.
     * @param ctx the parse tree
     */
    exitNodeTypePropertyTypes?: (ctx: NodeTypePropertyTypesContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeSpecification`.
     * @param ctx the parse tree
     */
    enterEdgeTypeSpecification?: (ctx: EdgeTypeSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeSpecification`.
     * @param ctx the parse tree
     */
    exitEdgeTypeSpecification?: (ctx: EdgeTypeSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePattern`.
     * @param ctx the parse tree
     */
    enterEdgeTypePattern?: (ctx: EdgeTypePatternContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePattern`.
     * @param ctx the parse tree
     */
    exitEdgeTypePattern?: (ctx: EdgeTypePatternContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePhrase`.
     * @param ctx the parse tree
     */
    enterEdgeTypePhrase?: (ctx: EdgeTypePhraseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePhrase`.
     * @param ctx the parse tree
     */
    exitEdgeTypePhrase?: (ctx: EdgeTypePhraseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePhraseFiller`.
     * @param ctx the parse tree
     */
    enterEdgeTypePhraseFiller?: (ctx: EdgeTypePhraseFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePhraseFiller`.
     * @param ctx the parse tree
     */
    exitEdgeTypePhraseFiller?: (ctx: EdgeTypePhraseFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeFiller`.
     * @param ctx the parse tree
     */
    enterEdgeTypeFiller?: (ctx: EdgeTypeFillerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeFiller`.
     * @param ctx the parse tree
     */
    exitEdgeTypeFiller?: (ctx: EdgeTypeFillerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeImpliedContent`.
     * @param ctx the parse tree
     */
    enterEdgeTypeImpliedContent?: (ctx: EdgeTypeImpliedContentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeImpliedContent`.
     * @param ctx the parse tree
     */
    exitEdgeTypeImpliedContent?: (ctx: EdgeTypeImpliedContentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeKeyLabelSet`.
     * @param ctx the parse tree
     */
    enterEdgeTypeKeyLabelSet?: (ctx: EdgeTypeKeyLabelSetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeKeyLabelSet`.
     * @param ctx the parse tree
     */
    exitEdgeTypeKeyLabelSet?: (ctx: EdgeTypeKeyLabelSetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeLabelSet`.
     * @param ctx the parse tree
     */
    enterEdgeTypeLabelSet?: (ctx: EdgeTypeLabelSetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeLabelSet`.
     * @param ctx the parse tree
     */
    exitEdgeTypeLabelSet?: (ctx: EdgeTypeLabelSetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePropertyTypes`.
     * @param ctx the parse tree
     */
    enterEdgeTypePropertyTypes?: (ctx: EdgeTypePropertyTypesContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePropertyTypes`.
     * @param ctx the parse tree
     */
    exitEdgeTypePropertyTypes?: (ctx: EdgeTypePropertyTypesContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePatternDirected`.
     * @param ctx the parse tree
     */
    enterEdgeTypePatternDirected?: (ctx: EdgeTypePatternDirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePatternDirected`.
     * @param ctx the parse tree
     */
    exitEdgeTypePatternDirected?: (ctx: EdgeTypePatternDirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePatternPointingRight`.
     * @param ctx the parse tree
     */
    enterEdgeTypePatternPointingRight?: (ctx: EdgeTypePatternPointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePatternPointingRight`.
     * @param ctx the parse tree
     */
    exitEdgeTypePatternPointingRight?: (ctx: EdgeTypePatternPointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePatternPointingLeft`.
     * @param ctx the parse tree
     */
    enterEdgeTypePatternPointingLeft?: (ctx: EdgeTypePatternPointingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePatternPointingLeft`.
     * @param ctx the parse tree
     */
    exitEdgeTypePatternPointingLeft?: (ctx: EdgeTypePatternPointingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypePatternUndirected`.
     * @param ctx the parse tree
     */
    enterEdgeTypePatternUndirected?: (ctx: EdgeTypePatternUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypePatternUndirected`.
     * @param ctx the parse tree
     */
    exitEdgeTypePatternUndirected?: (ctx: EdgeTypePatternUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.arcTypePointingRight`.
     * @param ctx the parse tree
     */
    enterArcTypePointingRight?: (ctx: ArcTypePointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.arcTypePointingRight`.
     * @param ctx the parse tree
     */
    exitArcTypePointingRight?: (ctx: ArcTypePointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.arcTypePointingLeft`.
     * @param ctx the parse tree
     */
    enterArcTypePointingLeft?: (ctx: ArcTypePointingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.arcTypePointingLeft`.
     * @param ctx the parse tree
     */
    exitArcTypePointingLeft?: (ctx: ArcTypePointingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.arcTypeUndirected`.
     * @param ctx the parse tree
     */
    enterArcTypeUndirected?: (ctx: ArcTypeUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.arcTypeUndirected`.
     * @param ctx the parse tree
     */
    exitArcTypeUndirected?: (ctx: ArcTypeUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sourceNodeTypeReference`.
     * @param ctx the parse tree
     */
    enterSourceNodeTypeReference?: (ctx: SourceNodeTypeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sourceNodeTypeReference`.
     * @param ctx the parse tree
     */
    exitSourceNodeTypeReference?: (ctx: SourceNodeTypeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.destinationNodeTypeReference`.
     * @param ctx the parse tree
     */
    enterDestinationNodeTypeReference?: (ctx: DestinationNodeTypeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.destinationNodeTypeReference`.
     * @param ctx the parse tree
     */
    exitDestinationNodeTypeReference?: (ctx: DestinationNodeTypeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeKind`.
     * @param ctx the parse tree
     */
    enterEdgeKind?: (ctx: EdgeKindContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeKind`.
     * @param ctx the parse tree
     */
    exitEdgeKind?: (ctx: EdgeKindContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPairPhrase`.
     * @param ctx the parse tree
     */
    enterEndpointPairPhrase?: (ctx: EndpointPairPhraseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPairPhrase`.
     * @param ctx the parse tree
     */
    exitEndpointPairPhrase?: (ctx: EndpointPairPhraseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPair`.
     * @param ctx the parse tree
     */
    enterEndpointPair?: (ctx: EndpointPairContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPair`.
     * @param ctx the parse tree
     */
    exitEndpointPair?: (ctx: EndpointPairContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPairDirected`.
     * @param ctx the parse tree
     */
    enterEndpointPairDirected?: (ctx: EndpointPairDirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPairDirected`.
     * @param ctx the parse tree
     */
    exitEndpointPairDirected?: (ctx: EndpointPairDirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPairPointingRight`.
     * @param ctx the parse tree
     */
    enterEndpointPairPointingRight?: (ctx: EndpointPairPointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPairPointingRight`.
     * @param ctx the parse tree
     */
    exitEndpointPairPointingRight?: (ctx: EndpointPairPointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPairPointingLeft`.
     * @param ctx the parse tree
     */
    enterEndpointPairPointingLeft?: (ctx: EndpointPairPointingLeftContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPairPointingLeft`.
     * @param ctx the parse tree
     */
    exitEndpointPairPointingLeft?: (ctx: EndpointPairPointingLeftContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.endpointPairUndirected`.
     * @param ctx the parse tree
     */
    enterEndpointPairUndirected?: (ctx: EndpointPairUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.endpointPairUndirected`.
     * @param ctx the parse tree
     */
    exitEndpointPairUndirected?: (ctx: EndpointPairUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.connectorPointingRight`.
     * @param ctx the parse tree
     */
    enterConnectorPointingRight?: (ctx: ConnectorPointingRightContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.connectorPointingRight`.
     * @param ctx the parse tree
     */
    exitConnectorPointingRight?: (ctx: ConnectorPointingRightContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.connectorUndirected`.
     * @param ctx the parse tree
     */
    enterConnectorUndirected?: (ctx: ConnectorUndirectedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.connectorUndirected`.
     * @param ctx the parse tree
     */
    exitConnectorUndirected?: (ctx: ConnectorUndirectedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sourceNodeTypeAlias`.
     * @param ctx the parse tree
     */
    enterSourceNodeTypeAlias?: (ctx: SourceNodeTypeAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sourceNodeTypeAlias`.
     * @param ctx the parse tree
     */
    exitSourceNodeTypeAlias?: (ctx: SourceNodeTypeAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.destinationNodeTypeAlias`.
     * @param ctx the parse tree
     */
    enterDestinationNodeTypeAlias?: (ctx: DestinationNodeTypeAliasContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.destinationNodeTypeAlias`.
     * @param ctx the parse tree
     */
    exitDestinationNodeTypeAlias?: (ctx: DestinationNodeTypeAliasContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labelSetPhrase`.
     * @param ctx the parse tree
     */
    enterLabelSetPhrase?: (ctx: LabelSetPhraseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labelSetPhrase`.
     * @param ctx the parse tree
     */
    exitLabelSetPhrase?: (ctx: LabelSetPhraseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labelSetSpecification`.
     * @param ctx the parse tree
     */
    enterLabelSetSpecification?: (ctx: LabelSetSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labelSetSpecification`.
     * @param ctx the parse tree
     */
    exitLabelSetSpecification?: (ctx: LabelSetSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyTypesSpecification`.
     * @param ctx the parse tree
     */
    enterPropertyTypesSpecification?: (ctx: PropertyTypesSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyTypesSpecification`.
     * @param ctx the parse tree
     */
    exitPropertyTypesSpecification?: (ctx: PropertyTypesSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyTypeList`.
     * @param ctx the parse tree
     */
    enterPropertyTypeList?: (ctx: PropertyTypeListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyTypeList`.
     * @param ctx the parse tree
     */
    exitPropertyTypeList?: (ctx: PropertyTypeListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyType`.
     * @param ctx the parse tree
     */
    enterPropertyType?: (ctx: PropertyTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyType`.
     * @param ctx the parse tree
     */
    exitPropertyType?: (ctx: PropertyTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyValueType`.
     * @param ctx the parse tree
     */
    enterPropertyValueType?: (ctx: PropertyValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyValueType`.
     * @param ctx the parse tree
     */
    exitPropertyValueType?: (ctx: PropertyValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableType`.
     * @param ctx the parse tree
     */
    enterBindingTableType?: (ctx: BindingTableTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableType`.
     * @param ctx the parse tree
     */
    exitBindingTableType?: (ctx: BindingTableTypeContext) => void;
    /**
     * Enter a parse tree produced by the `predefinedTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterPredefinedTypeLabel?: (ctx: PredefinedTypeLabelContext) => void;
    /**
     * Exit a parse tree produced by the `predefinedTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitPredefinedTypeLabel?: (ctx: PredefinedTypeLabelContext) => void;
    /**
     * Enter a parse tree produced by the `pathValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterPathValueTypeLabel?: (ctx: PathValueTypeLabelContext) => void;
    /**
     * Exit a parse tree produced by the `pathValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitPathValueTypeLabel?: (ctx: PathValueTypeLabelContext) => void;
    /**
     * Enter a parse tree produced by the `listValueTypeAlt1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterListValueTypeAlt1?: (ctx: ListValueTypeAlt1Context) => void;
    /**
     * Exit a parse tree produced by the `listValueTypeAlt1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitListValueTypeAlt1?: (ctx: ListValueTypeAlt1Context) => void;
    /**
     * Enter a parse tree produced by the `listValueTypeAlt3`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterListValueTypeAlt3?: (ctx: ListValueTypeAlt3Context) => void;
    /**
     * Exit a parse tree produced by the `listValueTypeAlt3`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitListValueTypeAlt3?: (ctx: ListValueTypeAlt3Context) => void;
    /**
     * Enter a parse tree produced by the `recordTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterRecordTypeLabel?: (ctx: RecordTypeLabelContext) => void;
    /**
     * Exit a parse tree produced by the `recordTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitRecordTypeLabel?: (ctx: RecordTypeLabelContext) => void;
    /**
     * Enter a parse tree produced by the `openDynamicUnionTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterOpenDynamicUnionTypeLabel?: (ctx: OpenDynamicUnionTypeLabelContext) => void;
    /**
     * Exit a parse tree produced by the `openDynamicUnionTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitOpenDynamicUnionTypeLabel?: (ctx: OpenDynamicUnionTypeLabelContext) => void;
    /**
     * Enter a parse tree produced by the `dynamicPropertyValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterDynamicPropertyValueTypeLabel?: (ctx: DynamicPropertyValueTypeLabelContext) => void;
    /**
     * Exit a parse tree produced by the `dynamicPropertyValueTypeLabel`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitDynamicPropertyValueTypeLabel?: (ctx: DynamicPropertyValueTypeLabelContext) => void;
    /**
     * Enter a parse tree produced by the `closedDynamicUnionTypeAtl1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterClosedDynamicUnionTypeAtl1?: (ctx: ClosedDynamicUnionTypeAtl1Context) => void;
    /**
     * Exit a parse tree produced by the `closedDynamicUnionTypeAtl1`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitClosedDynamicUnionTypeAtl1?: (ctx: ClosedDynamicUnionTypeAtl1Context) => void;
    /**
     * Enter a parse tree produced by the `closedDynamicUnionTypeAtl2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterClosedDynamicUnionTypeAtl2?: (ctx: ClosedDynamicUnionTypeAtl2Context) => void;
    /**
     * Exit a parse tree produced by the `closedDynamicUnionTypeAtl2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitClosedDynamicUnionTypeAtl2?: (ctx: ClosedDynamicUnionTypeAtl2Context) => void;
    /**
     * Enter a parse tree produced by the `listValueTypeAlt2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    enterListValueTypeAlt2?: (ctx: ListValueTypeAlt2Context) => void;
    /**
     * Exit a parse tree produced by the `listValueTypeAlt2`
     * labeled alternative in `GQLParser.valueType`.
     * @param ctx the parse tree
     */
    exitListValueTypeAlt2?: (ctx: ListValueTypeAlt2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.typed`.
     * @param ctx the parse tree
     */
    enterTyped?: (ctx: TypedContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.typed`.
     * @param ctx the parse tree
     */
    exitTyped?: (ctx: TypedContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.predefinedType`.
     * @param ctx the parse tree
     */
    enterPredefinedType?: (ctx: PredefinedTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.predefinedType`.
     * @param ctx the parse tree
     */
    exitPredefinedType?: (ctx: PredefinedTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.booleanType`.
     * @param ctx the parse tree
     */
    enterBooleanType?: (ctx: BooleanTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.booleanType`.
     * @param ctx the parse tree
     */
    exitBooleanType?: (ctx: BooleanTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.characterStringType`.
     * @param ctx the parse tree
     */
    enterCharacterStringType?: (ctx: CharacterStringTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.characterStringType`.
     * @param ctx the parse tree
     */
    exitCharacterStringType?: (ctx: CharacterStringTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.byteStringType`.
     * @param ctx the parse tree
     */
    enterByteStringType?: (ctx: ByteStringTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.byteStringType`.
     * @param ctx the parse tree
     */
    exitByteStringType?: (ctx: ByteStringTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.minLength`.
     * @param ctx the parse tree
     */
    enterMinLength?: (ctx: MinLengthContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.minLength`.
     * @param ctx the parse tree
     */
    exitMinLength?: (ctx: MinLengthContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.maxLength`.
     * @param ctx the parse tree
     */
    enterMaxLength?: (ctx: MaxLengthContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.maxLength`.
     * @param ctx the parse tree
     */
    exitMaxLength?: (ctx: MaxLengthContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fixedLength`.
     * @param ctx the parse tree
     */
    enterFixedLength?: (ctx: FixedLengthContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fixedLength`.
     * @param ctx the parse tree
     */
    exitFixedLength?: (ctx: FixedLengthContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericType`.
     * @param ctx the parse tree
     */
    enterNumericType?: (ctx: NumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericType`.
     * @param ctx the parse tree
     */
    exitNumericType?: (ctx: NumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.exactNumericType`.
     * @param ctx the parse tree
     */
    enterExactNumericType?: (ctx: ExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.exactNumericType`.
     * @param ctx the parse tree
     */
    exitExactNumericType?: (ctx: ExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.binaryExactNumericType`.
     * @param ctx the parse tree
     */
    enterBinaryExactNumericType?: (ctx: BinaryExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.binaryExactNumericType`.
     * @param ctx the parse tree
     */
    exitBinaryExactNumericType?: (ctx: BinaryExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.signedBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    enterSignedBinaryExactNumericType?: (ctx: SignedBinaryExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.signedBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    exitSignedBinaryExactNumericType?: (ctx: SignedBinaryExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    enterUnsignedBinaryExactNumericType?: (ctx: UnsignedBinaryExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    exitUnsignedBinaryExactNumericType?: (ctx: UnsignedBinaryExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.verboseBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    enterVerboseBinaryExactNumericType?: (ctx: VerboseBinaryExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.verboseBinaryExactNumericType`.
     * @param ctx the parse tree
     */
    exitVerboseBinaryExactNumericType?: (ctx: VerboseBinaryExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.decimalExactNumericType`.
     * @param ctx the parse tree
     */
    enterDecimalExactNumericType?: (ctx: DecimalExactNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.decimalExactNumericType`.
     * @param ctx the parse tree
     */
    exitDecimalExactNumericType?: (ctx: DecimalExactNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.precision`.
     * @param ctx the parse tree
     */
    enterPrecision?: (ctx: PrecisionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.precision`.
     * @param ctx the parse tree
     */
    exitPrecision?: (ctx: PrecisionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.scale`.
     * @param ctx the parse tree
     */
    enterScale?: (ctx: ScaleContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.scale`.
     * @param ctx the parse tree
     */
    exitScale?: (ctx: ScaleContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.approximateNumericType`.
     * @param ctx the parse tree
     */
    enterApproximateNumericType?: (ctx: ApproximateNumericTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.approximateNumericType`.
     * @param ctx the parse tree
     */
    exitApproximateNumericType?: (ctx: ApproximateNumericTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.temporalType`.
     * @param ctx the parse tree
     */
    enterTemporalType?: (ctx: TemporalTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.temporalType`.
     * @param ctx the parse tree
     */
    exitTemporalType?: (ctx: TemporalTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.temporalInstantType`.
     * @param ctx the parse tree
     */
    enterTemporalInstantType?: (ctx: TemporalInstantTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.temporalInstantType`.
     * @param ctx the parse tree
     */
    exitTemporalInstantType?: (ctx: TemporalInstantTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeType`.
     * @param ctx the parse tree
     */
    enterDatetimeType?: (ctx: DatetimeTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeType`.
     * @param ctx the parse tree
     */
    exitDatetimeType?: (ctx: DatetimeTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.localdatetimeType`.
     * @param ctx the parse tree
     */
    enterLocaldatetimeType?: (ctx: LocaldatetimeTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.localdatetimeType`.
     * @param ctx the parse tree
     */
    exitLocaldatetimeType?: (ctx: LocaldatetimeTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dateType`.
     * @param ctx the parse tree
     */
    enterDateType?: (ctx: DateTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dateType`.
     * @param ctx the parse tree
     */
    exitDateType?: (ctx: DateTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeType`.
     * @param ctx the parse tree
     */
    enterTimeType?: (ctx: TimeTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeType`.
     * @param ctx the parse tree
     */
    exitTimeType?: (ctx: TimeTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.localtimeType`.
     * @param ctx the parse tree
     */
    enterLocaltimeType?: (ctx: LocaltimeTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.localtimeType`.
     * @param ctx the parse tree
     */
    exitLocaltimeType?: (ctx: LocaltimeTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.temporalDurationType`.
     * @param ctx the parse tree
     */
    enterTemporalDurationType?: (ctx: TemporalDurationTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.temporalDurationType`.
     * @param ctx the parse tree
     */
    exitTemporalDurationType?: (ctx: TemporalDurationTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.temporalDurationQualifier`.
     * @param ctx the parse tree
     */
    enterTemporalDurationQualifier?: (ctx: TemporalDurationQualifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.temporalDurationQualifier`.
     * @param ctx the parse tree
     */
    exitTemporalDurationQualifier?: (ctx: TemporalDurationQualifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.referenceValueType`.
     * @param ctx the parse tree
     */
    enterReferenceValueType?: (ctx: ReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.referenceValueType`.
     * @param ctx the parse tree
     */
    exitReferenceValueType?: (ctx: ReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.immaterialValueType`.
     * @param ctx the parse tree
     */
    enterImmaterialValueType?: (ctx: ImmaterialValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.immaterialValueType`.
     * @param ctx the parse tree
     */
    exitImmaterialValueType?: (ctx: ImmaterialValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nullType`.
     * @param ctx the parse tree
     */
    enterNullType?: (ctx: NullTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nullType`.
     * @param ctx the parse tree
     */
    exitNullType?: (ctx: NullTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.emptyType`.
     * @param ctx the parse tree
     */
    enterEmptyType?: (ctx: EmptyTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.emptyType`.
     * @param ctx the parse tree
     */
    exitEmptyType?: (ctx: EmptyTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphReferenceValueType`.
     * @param ctx the parse tree
     */
    enterGraphReferenceValueType?: (ctx: GraphReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphReferenceValueType`.
     * @param ctx the parse tree
     */
    exitGraphReferenceValueType?: (ctx: GraphReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.closedGraphReferenceValueType`.
     * @param ctx the parse tree
     */
    enterClosedGraphReferenceValueType?: (ctx: ClosedGraphReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.closedGraphReferenceValueType`.
     * @param ctx the parse tree
     */
    exitClosedGraphReferenceValueType?: (ctx: ClosedGraphReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.openGraphReferenceValueType`.
     * @param ctx the parse tree
     */
    enterOpenGraphReferenceValueType?: (ctx: OpenGraphReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.openGraphReferenceValueType`.
     * @param ctx the parse tree
     */
    exitOpenGraphReferenceValueType?: (ctx: OpenGraphReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableReferenceValueType`.
     * @param ctx the parse tree
     */
    enterBindingTableReferenceValueType?: (ctx: BindingTableReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableReferenceValueType`.
     * @param ctx the parse tree
     */
    exitBindingTableReferenceValueType?: (ctx: BindingTableReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterNodeReferenceValueType?: (ctx: NodeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitNodeReferenceValueType?: (ctx: NodeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.closedNodeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterClosedNodeReferenceValueType?: (ctx: ClosedNodeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.closedNodeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitClosedNodeReferenceValueType?: (ctx: ClosedNodeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.openNodeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterOpenNodeReferenceValueType?: (ctx: OpenNodeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.openNodeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitOpenNodeReferenceValueType?: (ctx: OpenNodeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterEdgeReferenceValueType?: (ctx: EdgeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitEdgeReferenceValueType?: (ctx: EdgeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.closedEdgeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterClosedEdgeReferenceValueType?: (ctx: ClosedEdgeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.closedEdgeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitClosedEdgeReferenceValueType?: (ctx: ClosedEdgeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.openEdgeReferenceValueType`.
     * @param ctx the parse tree
     */
    enterOpenEdgeReferenceValueType?: (ctx: OpenEdgeReferenceValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.openEdgeReferenceValueType`.
     * @param ctx the parse tree
     */
    exitOpenEdgeReferenceValueType?: (ctx: OpenEdgeReferenceValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathValueType`.
     * @param ctx the parse tree
     */
    enterPathValueType?: (ctx: PathValueTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathValueType`.
     * @param ctx the parse tree
     */
    exitPathValueType?: (ctx: PathValueTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueTypeName`.
     * @param ctx the parse tree
     */
    enterListValueTypeName?: (ctx: ListValueTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueTypeName`.
     * @param ctx the parse tree
     */
    exitListValueTypeName?: (ctx: ListValueTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueTypeNameSynonym`.
     * @param ctx the parse tree
     */
    enterListValueTypeNameSynonym?: (ctx: ListValueTypeNameSynonymContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueTypeNameSynonym`.
     * @param ctx the parse tree
     */
    exitListValueTypeNameSynonym?: (ctx: ListValueTypeNameSynonymContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.recordType`.
     * @param ctx the parse tree
     */
    enterRecordType?: (ctx: RecordTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.recordType`.
     * @param ctx the parse tree
     */
    exitRecordType?: (ctx: RecordTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldTypesSpecification`.
     * @param ctx the parse tree
     */
    enterFieldTypesSpecification?: (ctx: FieldTypesSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldTypesSpecification`.
     * @param ctx the parse tree
     */
    exitFieldTypesSpecification?: (ctx: FieldTypesSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldTypeList`.
     * @param ctx the parse tree
     */
    enterFieldTypeList?: (ctx: FieldTypeListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldTypeList`.
     * @param ctx the parse tree
     */
    exitFieldTypeList?: (ctx: FieldTypeListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.notNull`.
     * @param ctx the parse tree
     */
    enterNotNull?: (ctx: NotNullContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.notNull`.
     * @param ctx the parse tree
     */
    exitNotNull?: (ctx: NotNullContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldType`.
     * @param ctx the parse tree
     */
    enterFieldType?: (ctx: FieldTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldType`.
     * @param ctx the parse tree
     */
    exitFieldType?: (ctx: FieldTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.searchCondition`.
     * @param ctx the parse tree
     */
    enterSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.searchCondition`.
     * @param ctx the parse tree
     */
    exitSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.compOp`.
     * @param ctx the parse tree
     */
    enterCompOp?: (ctx: CompOpContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.compOp`.
     * @param ctx the parse tree
     */
    exitCompOp?: (ctx: CompOpContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.existsPredicate`.
     * @param ctx the parse tree
     */
    enterExistsPredicate?: (ctx: ExistsPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.existsPredicate`.
     * @param ctx the parse tree
     */
    exitExistsPredicate?: (ctx: ExistsPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nullPredicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nullPredicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nullPredicatePart2`.
     * @param ctx the parse tree
     */
    enterNullPredicatePart2?: (ctx: NullPredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nullPredicatePart2`.
     * @param ctx the parse tree
     */
    exitNullPredicatePart2?: (ctx: NullPredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueTypePredicate`.
     * @param ctx the parse tree
     */
    enterValueTypePredicate?: (ctx: ValueTypePredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueTypePredicate`.
     * @param ctx the parse tree
     */
    exitValueTypePredicate?: (ctx: ValueTypePredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueTypePredicatePart2`.
     * @param ctx the parse tree
     */
    enterValueTypePredicatePart2?: (ctx: ValueTypePredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueTypePredicatePart2`.
     * @param ctx the parse tree
     */
    exitValueTypePredicatePart2?: (ctx: ValueTypePredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.normalizedPredicatePart2`.
     * @param ctx the parse tree
     */
    enterNormalizedPredicatePart2?: (ctx: NormalizedPredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.normalizedPredicatePart2`.
     * @param ctx the parse tree
     */
    exitNormalizedPredicatePart2?: (ctx: NormalizedPredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.directedPredicate`.
     * @param ctx the parse tree
     */
    enterDirectedPredicate?: (ctx: DirectedPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.directedPredicate`.
     * @param ctx the parse tree
     */
    exitDirectedPredicate?: (ctx: DirectedPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.directedPredicatePart2`.
     * @param ctx the parse tree
     */
    enterDirectedPredicatePart2?: (ctx: DirectedPredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.directedPredicatePart2`.
     * @param ctx the parse tree
     */
    exitDirectedPredicatePart2?: (ctx: DirectedPredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labeledPredicate`.
     * @param ctx the parse tree
     */
    enterLabeledPredicate?: (ctx: LabeledPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labeledPredicate`.
     * @param ctx the parse tree
     */
    exitLabeledPredicate?: (ctx: LabeledPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labeledPredicatePart2`.
     * @param ctx the parse tree
     */
    enterLabeledPredicatePart2?: (ctx: LabeledPredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labeledPredicatePart2`.
     * @param ctx the parse tree
     */
    exitLabeledPredicatePart2?: (ctx: LabeledPredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.isLabeledOrColon`.
     * @param ctx the parse tree
     */
    enterIsLabeledOrColon?: (ctx: IsLabeledOrColonContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.isLabeledOrColon`.
     * @param ctx the parse tree
     */
    exitIsLabeledOrColon?: (ctx: IsLabeledOrColonContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sourceDestinationPredicate`.
     * @param ctx the parse tree
     */
    enterSourceDestinationPredicate?: (ctx: SourceDestinationPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sourceDestinationPredicate`.
     * @param ctx the parse tree
     */
    exitSourceDestinationPredicate?: (ctx: SourceDestinationPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeReference`.
     * @param ctx the parse tree
     */
    enterNodeReference?: (ctx: NodeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeReference`.
     * @param ctx the parse tree
     */
    exitNodeReference?: (ctx: NodeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.sourcePredicatePart2`.
     * @param ctx the parse tree
     */
    enterSourcePredicatePart2?: (ctx: SourcePredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.sourcePredicatePart2`.
     * @param ctx the parse tree
     */
    exitSourcePredicatePart2?: (ctx: SourcePredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.destinationPredicatePart2`.
     * @param ctx the parse tree
     */
    enterDestinationPredicatePart2?: (ctx: DestinationPredicatePart2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.destinationPredicatePart2`.
     * @param ctx the parse tree
     */
    exitDestinationPredicatePart2?: (ctx: DestinationPredicatePart2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeReference`.
     * @param ctx the parse tree
     */
    enterEdgeReference?: (ctx: EdgeReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeReference`.
     * @param ctx the parse tree
     */
    exitEdgeReference?: (ctx: EdgeReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.all_differentPredicate`.
     * @param ctx the parse tree
     */
    enterAll_differentPredicate?: (ctx: All_differentPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.all_differentPredicate`.
     * @param ctx the parse tree
     */
    exitAll_differentPredicate?: (ctx: All_differentPredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.samePredicate`.
     * @param ctx the parse tree
     */
    enterSamePredicate?: (ctx: SamePredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.samePredicate`.
     * @param ctx the parse tree
     */
    exitSamePredicate?: (ctx: SamePredicateContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.property_existsPredicate`.
     * @param ctx the parse tree
     */
    enterProperty_existsPredicate?: (ctx: Property_existsPredicateContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.property_existsPredicate`.
     * @param ctx the parse tree
     */
    exitProperty_existsPredicate?: (ctx: Property_existsPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `signedExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterSignedExprAlt?: (ctx: SignedExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `signedExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitSignedExprAlt?: (ctx: SignedExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `predicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterPredicateExprAlt?: (ctx: PredicateExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `predicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitPredicateExprAlt?: (ctx: PredicateExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `notExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterNotExprAlt?: (ctx: NotExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `notExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitNotExprAlt?: (ctx: NotExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `propertyGraphExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterPropertyGraphExprAlt?: (ctx: PropertyGraphExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `propertyGraphExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitPropertyGraphExprAlt?: (ctx: PropertyGraphExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `bindingTableExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterBindingTableExprAlt?: (ctx: BindingTableExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `bindingTableExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitBindingTableExprAlt?: (ctx: BindingTableExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `valueFunctionExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueFunctionExprAlt?: (ctx: ValueFunctionExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `valueFunctionExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueFunctionExprAlt?: (ctx: ValueFunctionExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `primaryExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterPrimaryExprAlt?: (ctx: PrimaryExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `primaryExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitPrimaryExprAlt?: (ctx: PrimaryExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `multDivExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterMultDivExprAlt?: (ctx: MultDivExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `multDivExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitMultDivExprAlt?: (ctx: MultDivExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `addSubtractExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterAddSubtractExprAlt?: (ctx: AddSubtractExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `addSubtractExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitAddSubtractExprAlt?: (ctx: AddSubtractExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `concatenationExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenationExprAlt?: (ctx: ConcatenationExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `concatenationExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenationExprAlt?: (ctx: ConcatenationExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `comparisonExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterComparisonExprAlt?: (ctx: ComparisonExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `comparisonExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitComparisonExprAlt?: (ctx: ComparisonExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `conjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConjunctiveExprAlt?: (ctx: ConjunctiveExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `conjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConjunctiveExprAlt?: (ctx: ConjunctiveExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `disjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterDisjunctiveExprAlt?: (ctx: DisjunctiveExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `disjunctiveExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitDisjunctiveExprAlt?: (ctx: DisjunctiveExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `normalizedPredicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterNormalizedPredicateExprAlt?: (ctx: NormalizedPredicateExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `normalizedPredicateExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitNormalizedPredicateExprAlt?: (ctx: NormalizedPredicateExprAltContext) => void;
    /**
     * Enter a parse tree produced by the `isNotExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterIsNotExprAlt?: (ctx: IsNotExprAltContext) => void;
    /**
     * Exit a parse tree produced by the `isNotExprAlt`
     * labeled alternative in `GQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitIsNotExprAlt?: (ctx: IsNotExprAltContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueFunction`.
     * @param ctx the parse tree
     */
    enterValueFunction?: (ctx: ValueFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueFunction`.
     * @param ctx the parse tree
     */
    exitValueFunction?: (ctx: ValueFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.booleanValueExpression`.
     * @param ctx the parse tree
     */
    enterBooleanValueExpression?: (ctx: BooleanValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.booleanValueExpression`.
     * @param ctx the parse tree
     */
    exitBooleanValueExpression?: (ctx: BooleanValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.characterOrByteStringFunction`.
     * @param ctx the parse tree
     */
    enterCharacterOrByteStringFunction?: (ctx: CharacterOrByteStringFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.characterOrByteStringFunction`.
     * @param ctx the parse tree
     */
    exitCharacterOrByteStringFunction?: (ctx: CharacterOrByteStringFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.subCharacterOrByteString`.
     * @param ctx the parse tree
     */
    enterSubCharacterOrByteString?: (ctx: SubCharacterOrByteStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.subCharacterOrByteString`.
     * @param ctx the parse tree
     */
    exitSubCharacterOrByteString?: (ctx: SubCharacterOrByteStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimSingleCharacterOrByteString`.
     * @param ctx the parse tree
     */
    enterTrimSingleCharacterOrByteString?: (ctx: TrimSingleCharacterOrByteStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimSingleCharacterOrByteString`.
     * @param ctx the parse tree
     */
    exitTrimSingleCharacterOrByteString?: (ctx: TrimSingleCharacterOrByteStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.foldCharacterString`.
     * @param ctx the parse tree
     */
    enterFoldCharacterString?: (ctx: FoldCharacterStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.foldCharacterString`.
     * @param ctx the parse tree
     */
    exitFoldCharacterString?: (ctx: FoldCharacterStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimMultiCharacterCharacterString`.
     * @param ctx the parse tree
     */
    enterTrimMultiCharacterCharacterString?: (ctx: TrimMultiCharacterCharacterStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimMultiCharacterCharacterString`.
     * @param ctx the parse tree
     */
    exitTrimMultiCharacterCharacterString?: (ctx: TrimMultiCharacterCharacterStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.normalizeCharacterString`.
     * @param ctx the parse tree
     */
    enterNormalizeCharacterString?: (ctx: NormalizeCharacterStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.normalizeCharacterString`.
     * @param ctx the parse tree
     */
    exitNormalizeCharacterString?: (ctx: NormalizeCharacterStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeReferenceValueExpression`.
     * @param ctx the parse tree
     */
    enterNodeReferenceValueExpression?: (ctx: NodeReferenceValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeReferenceValueExpression`.
     * @param ctx the parse tree
     */
    exitNodeReferenceValueExpression?: (ctx: NodeReferenceValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeReferenceValueExpression`.
     * @param ctx the parse tree
     */
    enterEdgeReferenceValueExpression?: (ctx: EdgeReferenceValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeReferenceValueExpression`.
     * @param ctx the parse tree
     */
    exitEdgeReferenceValueExpression?: (ctx: EdgeReferenceValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.aggregatingValueExpression`.
     * @param ctx the parse tree
     */
    enterAggregatingValueExpression?: (ctx: AggregatingValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.aggregatingValueExpression`.
     * @param ctx the parse tree
     */
    exitAggregatingValueExpression?: (ctx: AggregatingValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueExpressionPrimary`.
     * @param ctx the parse tree
     */
    enterValueExpressionPrimary?: (ctx: ValueExpressionPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueExpressionPrimary`.
     * @param ctx the parse tree
     */
    exitValueExpressionPrimary?: (ctx: ValueExpressionPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.parenthesizedValueExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedValueExpression?: (ctx: ParenthesizedValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.parenthesizedValueExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedValueExpression?: (ctx: ParenthesizedValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimary`.
     * @param ctx the parse tree
     */
    enterNonParenthesizedValueExpressionPrimary?: (ctx: NonParenthesizedValueExpressionPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimary`.
     * @param ctx the parse tree
     */
    exitNonParenthesizedValueExpressionPrimary?: (ctx: NonParenthesizedValueExpressionPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimarySpecialCase`.
     * @param ctx the parse tree
     */
    enterNonParenthesizedValueExpressionPrimarySpecialCase?: (ctx: NonParenthesizedValueExpressionPrimarySpecialCaseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nonParenthesizedValueExpressionPrimarySpecialCase`.
     * @param ctx the parse tree
     */
    exitNonParenthesizedValueExpressionPrimarySpecialCase?: (ctx: NonParenthesizedValueExpressionPrimarySpecialCaseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedValueSpecification`.
     * @param ctx the parse tree
     */
    enterUnsignedValueSpecification?: (ctx: UnsignedValueSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedValueSpecification`.
     * @param ctx the parse tree
     */
    exitUnsignedValueSpecification?: (ctx: UnsignedValueSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nonNegativeIntegerSpecification`.
     * @param ctx the parse tree
     */
    enterNonNegativeIntegerSpecification?: (ctx: NonNegativeIntegerSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nonNegativeIntegerSpecification`.
     * @param ctx the parse tree
     */
    exitNonNegativeIntegerSpecification?: (ctx: NonNegativeIntegerSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalValueSpecification`.
     * @param ctx the parse tree
     */
    enterGeneralValueSpecification?: (ctx: GeneralValueSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalValueSpecification`.
     * @param ctx the parse tree
     */
    exitGeneralValueSpecification?: (ctx: GeneralValueSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dynamicParameterSpecification`.
     * @param ctx the parse tree
     */
    enterDynamicParameterSpecification?: (ctx: DynamicParameterSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dynamicParameterSpecification`.
     * @param ctx the parse tree
     */
    exitDynamicParameterSpecification?: (ctx: DynamicParameterSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.letValueExpression`.
     * @param ctx the parse tree
     */
    enterLetValueExpression?: (ctx: LetValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.letValueExpression`.
     * @param ctx the parse tree
     */
    exitLetValueExpression?: (ctx: LetValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.valueQueryExpression`.
     * @param ctx the parse tree
     */
    enterValueQueryExpression?: (ctx: ValueQueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.valueQueryExpression`.
     * @param ctx the parse tree
     */
    exitValueQueryExpression?: (ctx: ValueQueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.caseExpression`.
     * @param ctx the parse tree
     */
    enterCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.caseExpression`.
     * @param ctx the parse tree
     */
    exitCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.caseAbbreviation`.
     * @param ctx the parse tree
     */
    enterCaseAbbreviation?: (ctx: CaseAbbreviationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.caseAbbreviation`.
     * @param ctx the parse tree
     */
    exitCaseAbbreviation?: (ctx: CaseAbbreviationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.caseSpecification`.
     * @param ctx the parse tree
     */
    enterCaseSpecification?: (ctx: CaseSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.caseSpecification`.
     * @param ctx the parse tree
     */
    exitCaseSpecification?: (ctx: CaseSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleCase`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleCase`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.searchedCase`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.searchedCase`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.simpleWhenClause`.
     * @param ctx the parse tree
     */
    enterSimpleWhenClause?: (ctx: SimpleWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.simpleWhenClause`.
     * @param ctx the parse tree
     */
    exitSimpleWhenClause?: (ctx: SimpleWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.searchedWhenClause`.
     * @param ctx the parse tree
     */
    enterSearchedWhenClause?: (ctx: SearchedWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.searchedWhenClause`.
     * @param ctx the parse tree
     */
    exitSearchedWhenClause?: (ctx: SearchedWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.caseOperand`.
     * @param ctx the parse tree
     */
    enterCaseOperand?: (ctx: CaseOperandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.caseOperand`.
     * @param ctx the parse tree
     */
    exitCaseOperand?: (ctx: CaseOperandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.whenOperandList`.
     * @param ctx the parse tree
     */
    enterWhenOperandList?: (ctx: WhenOperandListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.whenOperandList`.
     * @param ctx the parse tree
     */
    exitWhenOperandList?: (ctx: WhenOperandListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.whenOperand`.
     * @param ctx the parse tree
     */
    enterWhenOperand?: (ctx: WhenOperandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.whenOperand`.
     * @param ctx the parse tree
     */
    exitWhenOperand?: (ctx: WhenOperandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.result`.
     * @param ctx the parse tree
     */
    enterResult?: (ctx: ResultContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.result`.
     * @param ctx the parse tree
     */
    exitResult?: (ctx: ResultContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.resultExpression`.
     * @param ctx the parse tree
     */
    enterResultExpression?: (ctx: ResultExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.resultExpression`.
     * @param ctx the parse tree
     */
    exitResultExpression?: (ctx: ResultExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.castSpecification`.
     * @param ctx the parse tree
     */
    enterCastSpecification?: (ctx: CastSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.castSpecification`.
     * @param ctx the parse tree
     */
    exitCastSpecification?: (ctx: CastSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.castOperand`.
     * @param ctx the parse tree
     */
    enterCastOperand?: (ctx: CastOperandContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.castOperand`.
     * @param ctx the parse tree
     */
    exitCastOperand?: (ctx: CastOperandContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.castTarget`.
     * @param ctx the parse tree
     */
    enterCastTarget?: (ctx: CastTargetContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.castTarget`.
     * @param ctx the parse tree
     */
    exitCastTarget?: (ctx: CastTargetContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.aggregateFunction`.
     * @param ctx the parse tree
     */
    enterAggregateFunction?: (ctx: AggregateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.aggregateFunction`.
     * @param ctx the parse tree
     */
    exitAggregateFunction?: (ctx: AggregateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalSetFunction`.
     * @param ctx the parse tree
     */
    enterGeneralSetFunction?: (ctx: GeneralSetFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalSetFunction`.
     * @param ctx the parse tree
     */
    exitGeneralSetFunction?: (ctx: GeneralSetFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.binarySetFunction`.
     * @param ctx the parse tree
     */
    enterBinarySetFunction?: (ctx: BinarySetFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.binarySetFunction`.
     * @param ctx the parse tree
     */
    exitBinarySetFunction?: (ctx: BinarySetFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalSetFunctionType`.
     * @param ctx the parse tree
     */
    enterGeneralSetFunctionType?: (ctx: GeneralSetFunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalSetFunctionType`.
     * @param ctx the parse tree
     */
    exitGeneralSetFunctionType?: (ctx: GeneralSetFunctionTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.binarySetFunctionType`.
     * @param ctx the parse tree
     */
    enterBinarySetFunctionType?: (ctx: BinarySetFunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.binarySetFunctionType`.
     * @param ctx the parse tree
     */
    exitBinarySetFunctionType?: (ctx: BinarySetFunctionTypeContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dependentValueExpression`.
     * @param ctx the parse tree
     */
    enterDependentValueExpression?: (ctx: DependentValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dependentValueExpression`.
     * @param ctx the parse tree
     */
    exitDependentValueExpression?: (ctx: DependentValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.independentValueExpression`.
     * @param ctx the parse tree
     */
    enterIndependentValueExpression?: (ctx: IndependentValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.independentValueExpression`.
     * @param ctx the parse tree
     */
    exitIndependentValueExpression?: (ctx: IndependentValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.element_idFunction`.
     * @param ctx the parse tree
     */
    enterElement_idFunction?: (ctx: Element_idFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.element_idFunction`.
     * @param ctx the parse tree
     */
    exitElement_idFunction?: (ctx: Element_idFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingVariableReference`.
     * @param ctx the parse tree
     */
    enterBindingVariableReference?: (ctx: BindingVariableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingVariableReference`.
     * @param ctx the parse tree
     */
    exitBindingVariableReference?: (ctx: BindingVariableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathValueExpression`.
     * @param ctx the parse tree
     */
    enterPathValueExpression?: (ctx: PathValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathValueExpression`.
     * @param ctx the parse tree
     */
    exitPathValueExpression?: (ctx: PathValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathValueConstructor`.
     * @param ctx the parse tree
     */
    enterPathValueConstructor?: (ctx: PathValueConstructorContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathValueConstructor`.
     * @param ctx the parse tree
     */
    exitPathValueConstructor?: (ctx: PathValueConstructorContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathValueConstructorByEnumeration`.
     * @param ctx the parse tree
     */
    enterPathValueConstructorByEnumeration?: (ctx: PathValueConstructorByEnumerationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathValueConstructorByEnumeration`.
     * @param ctx the parse tree
     */
    exitPathValueConstructorByEnumeration?: (ctx: PathValueConstructorByEnumerationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathElementList`.
     * @param ctx the parse tree
     */
    enterPathElementList?: (ctx: PathElementListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathElementList`.
     * @param ctx the parse tree
     */
    exitPathElementList?: (ctx: PathElementListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathElementListStart`.
     * @param ctx the parse tree
     */
    enterPathElementListStart?: (ctx: PathElementListStartContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathElementListStart`.
     * @param ctx the parse tree
     */
    exitPathElementListStart?: (ctx: PathElementListStartContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathElementListStep`.
     * @param ctx the parse tree
     */
    enterPathElementListStep?: (ctx: PathElementListStepContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathElementListStep`.
     * @param ctx the parse tree
     */
    exitPathElementListStep?: (ctx: PathElementListStepContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueExpression`.
     * @param ctx the parse tree
     */
    enterListValueExpression?: (ctx: ListValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueExpression`.
     * @param ctx the parse tree
     */
    exitListValueExpression?: (ctx: ListValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueFunction`.
     * @param ctx the parse tree
     */
    enterListValueFunction?: (ctx: ListValueFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueFunction`.
     * @param ctx the parse tree
     */
    exitListValueFunction?: (ctx: ListValueFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimListFunction`.
     * @param ctx the parse tree
     */
    enterTrimListFunction?: (ctx: TrimListFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimListFunction`.
     * @param ctx the parse tree
     */
    exitTrimListFunction?: (ctx: TrimListFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementsFunction`.
     * @param ctx the parse tree
     */
    enterElementsFunction?: (ctx: ElementsFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementsFunction`.
     * @param ctx the parse tree
     */
    exitElementsFunction?: (ctx: ElementsFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueConstructor`.
     * @param ctx the parse tree
     */
    enterListValueConstructor?: (ctx: ListValueConstructorContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueConstructor`.
     * @param ctx the parse tree
     */
    exitListValueConstructor?: (ctx: ListValueConstructorContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listValueConstructorByEnumeration`.
     * @param ctx the parse tree
     */
    enterListValueConstructorByEnumeration?: (ctx: ListValueConstructorByEnumerationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listValueConstructorByEnumeration`.
     * @param ctx the parse tree
     */
    exitListValueConstructorByEnumeration?: (ctx: ListValueConstructorByEnumerationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listElementList`.
     * @param ctx the parse tree
     */
    enterListElementList?: (ctx: ListElementListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listElementList`.
     * @param ctx the parse tree
     */
    exitListElementList?: (ctx: ListElementListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listElement`.
     * @param ctx the parse tree
     */
    enterListElement?: (ctx: ListElementContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listElement`.
     * @param ctx the parse tree
     */
    exitListElement?: (ctx: ListElementContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.recordConstructor`.
     * @param ctx the parse tree
     */
    enterRecordConstructor?: (ctx: RecordConstructorContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.recordConstructor`.
     * @param ctx the parse tree
     */
    exitRecordConstructor?: (ctx: RecordConstructorContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldsSpecification`.
     * @param ctx the parse tree
     */
    enterFieldsSpecification?: (ctx: FieldsSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldsSpecification`.
     * @param ctx the parse tree
     */
    exitFieldsSpecification?: (ctx: FieldsSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldList`.
     * @param ctx the parse tree
     */
    enterFieldList?: (ctx: FieldListContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldList`.
     * @param ctx the parse tree
     */
    exitFieldList?: (ctx: FieldListContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.field`.
     * @param ctx the parse tree
     */
    enterField?: (ctx: FieldContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.field`.
     * @param ctx the parse tree
     */
    exitField?: (ctx: FieldContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.truthValue`.
     * @param ctx the parse tree
     */
    enterTruthValue?: (ctx: TruthValueContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.truthValue`.
     * @param ctx the parse tree
     */
    exitTruthValue?: (ctx: TruthValueContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueExpression`.
     * @param ctx the parse tree
     */
    enterNumericValueExpression?: (ctx: NumericValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueExpression`.
     * @param ctx the parse tree
     */
    exitNumericValueExpression?: (ctx: NumericValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueFunction`.
     * @param ctx the parse tree
     */
    enterNumericValueFunction?: (ctx: NumericValueFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueFunction`.
     * @param ctx the parse tree
     */
    exitNumericValueFunction?: (ctx: NumericValueFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.lengthExpression`.
     * @param ctx the parse tree
     */
    enterLengthExpression?: (ctx: LengthExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.lengthExpression`.
     * @param ctx the parse tree
     */
    exitLengthExpression?: (ctx: LengthExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.cardinalityExpression`.
     * @param ctx the parse tree
     */
    enterCardinalityExpression?: (ctx: CardinalityExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.cardinalityExpression`.
     * @param ctx the parse tree
     */
    exitCardinalityExpression?: (ctx: CardinalityExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.cardinalityExpressionArgument`.
     * @param ctx the parse tree
     */
    enterCardinalityExpressionArgument?: (ctx: CardinalityExpressionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.cardinalityExpressionArgument`.
     * @param ctx the parse tree
     */
    exitCardinalityExpressionArgument?: (ctx: CardinalityExpressionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.charLengthExpression`.
     * @param ctx the parse tree
     */
    enterCharLengthExpression?: (ctx: CharLengthExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.charLengthExpression`.
     * @param ctx the parse tree
     */
    exitCharLengthExpression?: (ctx: CharLengthExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.byteLengthExpression`.
     * @param ctx the parse tree
     */
    enterByteLengthExpression?: (ctx: ByteLengthExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.byteLengthExpression`.
     * @param ctx the parse tree
     */
    exitByteLengthExpression?: (ctx: ByteLengthExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathLengthExpression`.
     * @param ctx the parse tree
     */
    enterPathLengthExpression?: (ctx: PathLengthExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathLengthExpression`.
     * @param ctx the parse tree
     */
    exitPathLengthExpression?: (ctx: PathLengthExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.absoluteValueExpression`.
     * @param ctx the parse tree
     */
    enterAbsoluteValueExpression?: (ctx: AbsoluteValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.absoluteValueExpression`.
     * @param ctx the parse tree
     */
    exitAbsoluteValueExpression?: (ctx: AbsoluteValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.modulusExpression`.
     * @param ctx the parse tree
     */
    enterModulusExpression?: (ctx: ModulusExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.modulusExpression`.
     * @param ctx the parse tree
     */
    exitModulusExpression?: (ctx: ModulusExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueExpressionDividend`.
     * @param ctx the parse tree
     */
    enterNumericValueExpressionDividend?: (ctx: NumericValueExpressionDividendContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueExpressionDividend`.
     * @param ctx the parse tree
     */
    exitNumericValueExpressionDividend?: (ctx: NumericValueExpressionDividendContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueExpressionDivisor`.
     * @param ctx the parse tree
     */
    enterNumericValueExpressionDivisor?: (ctx: NumericValueExpressionDivisorContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueExpressionDivisor`.
     * @param ctx the parse tree
     */
    exitNumericValueExpressionDivisor?: (ctx: NumericValueExpressionDivisorContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trigonometricFunction`.
     * @param ctx the parse tree
     */
    enterTrigonometricFunction?: (ctx: TrigonometricFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trigonometricFunction`.
     * @param ctx the parse tree
     */
    exitTrigonometricFunction?: (ctx: TrigonometricFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trigonometricFunctionName`.
     * @param ctx the parse tree
     */
    enterTrigonometricFunctionName?: (ctx: TrigonometricFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trigonometricFunctionName`.
     * @param ctx the parse tree
     */
    exitTrigonometricFunctionName?: (ctx: TrigonometricFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalLogarithmFunction`.
     * @param ctx the parse tree
     */
    enterGeneralLogarithmFunction?: (ctx: GeneralLogarithmFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalLogarithmFunction`.
     * @param ctx the parse tree
     */
    exitGeneralLogarithmFunction?: (ctx: GeneralLogarithmFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalLogarithmBase`.
     * @param ctx the parse tree
     */
    enterGeneralLogarithmBase?: (ctx: GeneralLogarithmBaseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalLogarithmBase`.
     * @param ctx the parse tree
     */
    exitGeneralLogarithmBase?: (ctx: GeneralLogarithmBaseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalLogarithmArgument`.
     * @param ctx the parse tree
     */
    enterGeneralLogarithmArgument?: (ctx: GeneralLogarithmArgumentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalLogarithmArgument`.
     * @param ctx the parse tree
     */
    exitGeneralLogarithmArgument?: (ctx: GeneralLogarithmArgumentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.commonLogarithm`.
     * @param ctx the parse tree
     */
    enterCommonLogarithm?: (ctx: CommonLogarithmContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.commonLogarithm`.
     * @param ctx the parse tree
     */
    exitCommonLogarithm?: (ctx: CommonLogarithmContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.naturalLogarithm`.
     * @param ctx the parse tree
     */
    enterNaturalLogarithm?: (ctx: NaturalLogarithmContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.naturalLogarithm`.
     * @param ctx the parse tree
     */
    exitNaturalLogarithm?: (ctx: NaturalLogarithmContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.exponentialFunction`.
     * @param ctx the parse tree
     */
    enterExponentialFunction?: (ctx: ExponentialFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.exponentialFunction`.
     * @param ctx the parse tree
     */
    exitExponentialFunction?: (ctx: ExponentialFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.powerFunction`.
     * @param ctx the parse tree
     */
    enterPowerFunction?: (ctx: PowerFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.powerFunction`.
     * @param ctx the parse tree
     */
    exitPowerFunction?: (ctx: PowerFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueExpressionBase`.
     * @param ctx the parse tree
     */
    enterNumericValueExpressionBase?: (ctx: NumericValueExpressionBaseContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueExpressionBase`.
     * @param ctx the parse tree
     */
    exitNumericValueExpressionBase?: (ctx: NumericValueExpressionBaseContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.numericValueExpressionExponent`.
     * @param ctx the parse tree
     */
    enterNumericValueExpressionExponent?: (ctx: NumericValueExpressionExponentContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.numericValueExpressionExponent`.
     * @param ctx the parse tree
     */
    exitNumericValueExpressionExponent?: (ctx: NumericValueExpressionExponentContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.squareRoot`.
     * @param ctx the parse tree
     */
    enterSquareRoot?: (ctx: SquareRootContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.squareRoot`.
     * @param ctx the parse tree
     */
    exitSquareRoot?: (ctx: SquareRootContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.floorFunction`.
     * @param ctx the parse tree
     */
    enterFloorFunction?: (ctx: FloorFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.floorFunction`.
     * @param ctx the parse tree
     */
    exitFloorFunction?: (ctx: FloorFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.ceilingFunction`.
     * @param ctx the parse tree
     */
    enterCeilingFunction?: (ctx: CeilingFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.ceilingFunction`.
     * @param ctx the parse tree
     */
    exitCeilingFunction?: (ctx: CeilingFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.characterStringValueExpression`.
     * @param ctx the parse tree
     */
    enterCharacterStringValueExpression?: (ctx: CharacterStringValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.characterStringValueExpression`.
     * @param ctx the parse tree
     */
    exitCharacterStringValueExpression?: (ctx: CharacterStringValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.byteStringValueExpression`.
     * @param ctx the parse tree
     */
    enterByteStringValueExpression?: (ctx: ByteStringValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.byteStringValueExpression`.
     * @param ctx the parse tree
     */
    exitByteStringValueExpression?: (ctx: ByteStringValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimOperands`.
     * @param ctx the parse tree
     */
    enterTrimOperands?: (ctx: TrimOperandsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimOperands`.
     * @param ctx the parse tree
     */
    exitTrimOperands?: (ctx: TrimOperandsContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimCharacterOrByteStringSource`.
     * @param ctx the parse tree
     */
    enterTrimCharacterOrByteStringSource?: (ctx: TrimCharacterOrByteStringSourceContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimCharacterOrByteStringSource`.
     * @param ctx the parse tree
     */
    exitTrimCharacterOrByteStringSource?: (ctx: TrimCharacterOrByteStringSourceContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimSpecification`.
     * @param ctx the parse tree
     */
    enterTrimSpecification?: (ctx: TrimSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimSpecification`.
     * @param ctx the parse tree
     */
    exitTrimSpecification?: (ctx: TrimSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.trimCharacterOrByteString`.
     * @param ctx the parse tree
     */
    enterTrimCharacterOrByteString?: (ctx: TrimCharacterOrByteStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.trimCharacterOrByteString`.
     * @param ctx the parse tree
     */
    exitTrimCharacterOrByteString?: (ctx: TrimCharacterOrByteStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.normalForm`.
     * @param ctx the parse tree
     */
    enterNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.normalForm`.
     * @param ctx the parse tree
     */
    exitNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.stringLength`.
     * @param ctx the parse tree
     */
    enterStringLength?: (ctx: StringLengthContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.stringLength`.
     * @param ctx the parse tree
     */
    exitStringLength?: (ctx: StringLengthContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeValueExpression`.
     * @param ctx the parse tree
     */
    enterDatetimeValueExpression?: (ctx: DatetimeValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeValueExpression`.
     * @param ctx the parse tree
     */
    exitDatetimeValueExpression?: (ctx: DatetimeValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeValueFunction`.
     * @param ctx the parse tree
     */
    enterDatetimeValueFunction?: (ctx: DatetimeValueFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeValueFunction`.
     * @param ctx the parse tree
     */
    exitDatetimeValueFunction?: (ctx: DatetimeValueFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dateFunction`.
     * @param ctx the parse tree
     */
    enterDateFunction?: (ctx: DateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dateFunction`.
     * @param ctx the parse tree
     */
    exitDateFunction?: (ctx: DateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeFunction`.
     * @param ctx the parse tree
     */
    enterTimeFunction?: (ctx: TimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeFunction`.
     * @param ctx the parse tree
     */
    exitTimeFunction?: (ctx: TimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.localtimeFunction`.
     * @param ctx the parse tree
     */
    enterLocaltimeFunction?: (ctx: LocaltimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.localtimeFunction`.
     * @param ctx the parse tree
     */
    exitLocaltimeFunction?: (ctx: LocaltimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeFunction`.
     * @param ctx the parse tree
     */
    enterDatetimeFunction?: (ctx: DatetimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeFunction`.
     * @param ctx the parse tree
     */
    exitDatetimeFunction?: (ctx: DatetimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.localdatetimeFunction`.
     * @param ctx the parse tree
     */
    enterLocaldatetimeFunction?: (ctx: LocaldatetimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.localdatetimeFunction`.
     * @param ctx the parse tree
     */
    exitLocaldatetimeFunction?: (ctx: LocaldatetimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dateFunctionParameters`.
     * @param ctx the parse tree
     */
    enterDateFunctionParameters?: (ctx: DateFunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dateFunctionParameters`.
     * @param ctx the parse tree
     */
    exitDateFunctionParameters?: (ctx: DateFunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeFunctionParameters`.
     * @param ctx the parse tree
     */
    enterTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeFunctionParameters`.
     * @param ctx the parse tree
     */
    exitTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeFunctionParameters`.
     * @param ctx the parse tree
     */
    enterDatetimeFunctionParameters?: (ctx: DatetimeFunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeFunctionParameters`.
     * @param ctx the parse tree
     */
    exitDatetimeFunctionParameters?: (ctx: DatetimeFunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationValueExpression`.
     * @param ctx the parse tree
     */
    enterDurationValueExpression?: (ctx: DurationValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationValueExpression`.
     * @param ctx the parse tree
     */
    exitDurationValueExpression?: (ctx: DurationValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeSubtraction`.
     * @param ctx the parse tree
     */
    enterDatetimeSubtraction?: (ctx: DatetimeSubtractionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeSubtraction`.
     * @param ctx the parse tree
     */
    exitDatetimeSubtraction?: (ctx: DatetimeSubtractionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeSubtractionParameters`.
     * @param ctx the parse tree
     */
    enterDatetimeSubtractionParameters?: (ctx: DatetimeSubtractionParametersContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeSubtractionParameters`.
     * @param ctx the parse tree
     */
    exitDatetimeSubtractionParameters?: (ctx: DatetimeSubtractionParametersContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeValueExpression1`.
     * @param ctx the parse tree
     */
    enterDatetimeValueExpression1?: (ctx: DatetimeValueExpression1Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeValueExpression1`.
     * @param ctx the parse tree
     */
    exitDatetimeValueExpression1?: (ctx: DatetimeValueExpression1Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeValueExpression2`.
     * @param ctx the parse tree
     */
    enterDatetimeValueExpression2?: (ctx: DatetimeValueExpression2Context) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeValueExpression2`.
     * @param ctx the parse tree
     */
    exitDatetimeValueExpression2?: (ctx: DatetimeValueExpression2Context) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationValueFunction`.
     * @param ctx the parse tree
     */
    enterDurationValueFunction?: (ctx: DurationValueFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationValueFunction`.
     * @param ctx the parse tree
     */
    exitDurationValueFunction?: (ctx: DurationValueFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationFunction`.
     * @param ctx the parse tree
     */
    enterDurationFunction?: (ctx: DurationFunctionContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationFunction`.
     * @param ctx the parse tree
     */
    exitDurationFunction?: (ctx: DurationFunctionContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationFunctionParameters`.
     * @param ctx the parse tree
     */
    enterDurationFunctionParameters?: (ctx: DurationFunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationFunctionParameters`.
     * @param ctx the parse tree
     */
    exitDurationFunctionParameters?: (ctx: DurationFunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.objectName`.
     * @param ctx the parse tree
     */
    enterObjectName?: (ctx: ObjectNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.objectName`.
     * @param ctx the parse tree
     */
    exitObjectName?: (ctx: ObjectNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.objectNameOrBindingVariable`.
     * @param ctx the parse tree
     */
    enterObjectNameOrBindingVariable?: (ctx: ObjectNameOrBindingVariableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.objectNameOrBindingVariable`.
     * @param ctx the parse tree
     */
    exitObjectNameOrBindingVariable?: (ctx: ObjectNameOrBindingVariableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.directoryName`.
     * @param ctx the parse tree
     */
    enterDirectoryName?: (ctx: DirectoryNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.directoryName`.
     * @param ctx the parse tree
     */
    exitDirectoryName?: (ctx: DirectoryNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.schemaName`.
     * @param ctx the parse tree
     */
    enterSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.schemaName`.
     * @param ctx the parse tree
     */
    exitSchemaName?: (ctx: SchemaNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphName`.
     * @param ctx the parse tree
     */
    enterGraphName?: (ctx: GraphNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphName`.
     * @param ctx the parse tree
     */
    exitGraphName?: (ctx: GraphNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.delimitedGraphName`.
     * @param ctx the parse tree
     */
    enterDelimitedGraphName?: (ctx: DelimitedGraphNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.delimitedGraphName`.
     * @param ctx the parse tree
     */
    exitDelimitedGraphName?: (ctx: DelimitedGraphNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.graphTypeName`.
     * @param ctx the parse tree
     */
    enterGraphTypeName?: (ctx: GraphTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.graphTypeName`.
     * @param ctx the parse tree
     */
    exitGraphTypeName?: (ctx: GraphTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeTypeName`.
     * @param ctx the parse tree
     */
    enterNodeTypeName?: (ctx: NodeTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeTypeName`.
     * @param ctx the parse tree
     */
    exitNodeTypeName?: (ctx: NodeTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeTypeName`.
     * @param ctx the parse tree
     */
    enterEdgeTypeName?: (ctx: EdgeTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeTypeName`.
     * @param ctx the parse tree
     */
    exitEdgeTypeName?: (ctx: EdgeTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingTableName`.
     * @param ctx the parse tree
     */
    enterBindingTableName?: (ctx: BindingTableNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingTableName`.
     * @param ctx the parse tree
     */
    exitBindingTableName?: (ctx: BindingTableNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.delimitedBindingTableName`.
     * @param ctx the parse tree
     */
    enterDelimitedBindingTableName?: (ctx: DelimitedBindingTableNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.delimitedBindingTableName`.
     * @param ctx the parse tree
     */
    exitDelimitedBindingTableName?: (ctx: DelimitedBindingTableNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.procedureName`.
     * @param ctx the parse tree
     */
    enterProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.procedureName`.
     * @param ctx the parse tree
     */
    exitProcedureName?: (ctx: ProcedureNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.labelName`.
     * @param ctx the parse tree
     */
    enterLabelName?: (ctx: LabelNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.labelName`.
     * @param ctx the parse tree
     */
    exitLabelName?: (ctx: LabelNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.propertyName`.
     * @param ctx the parse tree
     */
    enterPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.propertyName`.
     * @param ctx the parse tree
     */
    exitPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.fieldName`.
     * @param ctx the parse tree
     */
    enterFieldName?: (ctx: FieldNameContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.fieldName`.
     * @param ctx the parse tree
     */
    exitFieldName?: (ctx: FieldNameContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.elementVariable`.
     * @param ctx the parse tree
     */
    enterElementVariable?: (ctx: ElementVariableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.elementVariable`.
     * @param ctx the parse tree
     */
    exitElementVariable?: (ctx: ElementVariableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.pathVariable`.
     * @param ctx the parse tree
     */
    enterPathVariable?: (ctx: PathVariableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.pathVariable`.
     * @param ctx the parse tree
     */
    exitPathVariable?: (ctx: PathVariableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.subpathVariable`.
     * @param ctx the parse tree
     */
    enterSubpathVariable?: (ctx: SubpathVariableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.subpathVariable`.
     * @param ctx the parse tree
     */
    exitSubpathVariable?: (ctx: SubpathVariableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.bindingVariable`.
     * @param ctx the parse tree
     */
    enterBindingVariable?: (ctx: BindingVariableContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.bindingVariable`.
     * @param ctx the parse tree
     */
    exitBindingVariable?: (ctx: BindingVariableContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedLiteral`.
     * @param ctx the parse tree
     */
    enterUnsignedLiteral?: (ctx: UnsignedLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedLiteral`.
     * @param ctx the parse tree
     */
    exitUnsignedLiteral?: (ctx: UnsignedLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.generalLiteral`.
     * @param ctx the parse tree
     */
    enterGeneralLiteral?: (ctx: GeneralLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.generalLiteral`.
     * @param ctx the parse tree
     */
    exitGeneralLiteral?: (ctx: GeneralLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.temporalLiteral`.
     * @param ctx the parse tree
     */
    enterTemporalLiteral?: (ctx: TemporalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.temporalLiteral`.
     * @param ctx the parse tree
     */
    exitTemporalLiteral?: (ctx: TemporalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dateLiteral`.
     * @param ctx the parse tree
     */
    enterDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dateLiteral`.
     * @param ctx the parse tree
     */
    exitDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeLiteral`.
     * @param ctx the parse tree
     */
    enterTimeLiteral?: (ctx: TimeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeLiteral`.
     * @param ctx the parse tree
     */
    exitTimeLiteral?: (ctx: TimeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeLiteral`.
     * @param ctx the parse tree
     */
    enterDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeLiteral`.
     * @param ctx the parse tree
     */
    exitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.listLiteral`.
     * @param ctx the parse tree
     */
    enterListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.listLiteral`.
     * @param ctx the parse tree
     */
    exitListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.recordLiteral`.
     * @param ctx the parse tree
     */
    enterRecordLiteral?: (ctx: RecordLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.recordLiteral`.
     * @param ctx the parse tree
     */
    exitRecordLiteral?: (ctx: RecordLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.regularIdentifier`.
     * @param ctx the parse tree
     */
    enterRegularIdentifier?: (ctx: RegularIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.regularIdentifier`.
     * @param ctx the parse tree
     */
    exitRegularIdentifier?: (ctx: RegularIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeZoneString`.
     * @param ctx the parse tree
     */
    enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeZoneString`.
     * @param ctx the parse tree
     */
    exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.characterStringLiteral`.
     * @param ctx the parse tree
     */
    enterCharacterStringLiteral?: (ctx: CharacterStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.characterStringLiteral`.
     * @param ctx the parse tree
     */
    exitCharacterStringLiteral?: (ctx: CharacterStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedNumericLiteral`.
     * @param ctx the parse tree
     */
    enterUnsignedNumericLiteral?: (ctx: UnsignedNumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedNumericLiteral`.
     * @param ctx the parse tree
     */
    exitUnsignedNumericLiteral?: (ctx: UnsignedNumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.exactNumericLiteral`.
     * @param ctx the parse tree
     */
    enterExactNumericLiteral?: (ctx: ExactNumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.exactNumericLiteral`.
     * @param ctx the parse tree
     */
    exitExactNumericLiteral?: (ctx: ExactNumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.approximateNumericLiteral`.
     * @param ctx the parse tree
     */
    enterApproximateNumericLiteral?: (ctx: ApproximateNumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.approximateNumericLiteral`.
     * @param ctx the parse tree
     */
    exitApproximateNumericLiteral?: (ctx: ApproximateNumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedInteger`.
     * @param ctx the parse tree
     */
    enterUnsignedInteger?: (ctx: UnsignedIntegerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedInteger`.
     * @param ctx the parse tree
     */
    exitUnsignedInteger?: (ctx: UnsignedIntegerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.unsignedDecimalInteger`.
     * @param ctx the parse tree
     */
    enterUnsignedDecimalInteger?: (ctx: UnsignedDecimalIntegerContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.unsignedDecimalInteger`.
     * @param ctx the parse tree
     */
    exitUnsignedDecimalInteger?: (ctx: UnsignedDecimalIntegerContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nullLiteral`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nullLiteral`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.dateString`.
     * @param ctx the parse tree
     */
    enterDateString?: (ctx: DateStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.dateString`.
     * @param ctx the parse tree
     */
    exitDateString?: (ctx: DateStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.timeString`.
     * @param ctx the parse tree
     */
    enterTimeString?: (ctx: TimeStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.timeString`.
     * @param ctx the parse tree
     */
    exitTimeString?: (ctx: TimeStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.datetimeString`.
     * @param ctx the parse tree
     */
    enterDatetimeString?: (ctx: DatetimeStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.datetimeString`.
     * @param ctx the parse tree
     */
    exitDatetimeString?: (ctx: DatetimeStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationLiteral`.
     * @param ctx the parse tree
     */
    enterDurationLiteral?: (ctx: DurationLiteralContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationLiteral`.
     * @param ctx the parse tree
     */
    exitDurationLiteral?: (ctx: DurationLiteralContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.durationString`.
     * @param ctx the parse tree
     */
    enterDurationString?: (ctx: DurationStringContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.durationString`.
     * @param ctx the parse tree
     */
    exitDurationString?: (ctx: DurationStringContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nodeSynonym`.
     * @param ctx the parse tree
     */
    enterNodeSynonym?: (ctx: NodeSynonymContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nodeSynonym`.
     * @param ctx the parse tree
     */
    exitNodeSynonym?: (ctx: NodeSynonymContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgesSynonym`.
     * @param ctx the parse tree
     */
    enterEdgesSynonym?: (ctx: EdgesSynonymContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgesSynonym`.
     * @param ctx the parse tree
     */
    exitEdgesSynonym?: (ctx: EdgesSynonymContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.edgeSynonym`.
     * @param ctx the parse tree
     */
    enterEdgeSynonym?: (ctx: EdgeSynonymContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.edgeSynonym`.
     * @param ctx the parse tree
     */
    exitEdgeSynonym?: (ctx: EdgeSynonymContext) => void;
    /**
     * Enter a parse tree produced by `GQLParser.nonReservedWords`.
     * @param ctx the parse tree
     */
    enterNonReservedWords?: (ctx: NonReservedWordsContext) => void;
    /**
     * Exit a parse tree produced by `GQLParser.nonReservedWords`.
     * @param ctx the parse tree
     */
    exitNonReservedWords?: (ctx: NonReservedWordsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

